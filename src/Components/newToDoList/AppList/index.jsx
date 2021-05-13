import React, { Component } from 'react'
import './index.css'
import Item from './Item'
import PubSub from 'pubsub-js'

export default class AppList extends Component {

    state = {
        todos: [
            { id: 1, name: 'working', done: true },
            { id: 2, name: 'sporting', done: true },
            { id: 3, name: 'sporting2', done: false }

        ]
    }
    


    componentDidMount() {

        PubSub.publish('todos', this.state.todos)

        this.token = PubSub.subscribe('newToDo', (_, data) => {
            let {todos} = this.state

            let newToDos = [...todos, data]

            this.setState({
                todos:newToDos
            })
        })

        this.token2 = PubSub.subscribe('id', (_, data) => {
            let {todos} = this.state
            todos.map((todo)=>{
                if (todo.id === data){
                    let myIndex = todos.indexOf(todo)
                    todos.splice(myIndex, 1)
                }
                this.setState({
                    todos:todos
                })
                return ''
            })
        })

        this.token3 = PubSub.subscribe('checkId', (_, data)=>{
            let {todos} = this.state;

            todos.map((todo)=>{
        
                if (todo.id === data) {
                    todo.done = !todo.done
                }

                return ''
            })

            this.setState({
                todos:todos
            })

        })
    }

    componentDidUpdate() {

        PubSub.publish('todos', this.state.todos)
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
        PubSub.unsubscribe(this.token2)
        PubSub.unsubscribe(this.token3)
    }


      
    render() {


        const { todos } = this.state

        return (
            todos.map((todo) => {
                return (

                        <Item key={todo.id} todo={todo} />


                )
            })
        )
    }
}
