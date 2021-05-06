import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class AppFooter extends Component {


    state = {
        selectedVaule : 0,
        totalTodo : 0
    }
    

    UNSAFE_componentWillMount(){
        let t = 0, s = 0
        this.token = PubSub.subscribe('todos', (_, data)=>{
            data.map((x)=>{
                t = t + 1
                if(x.done === true) {s = s + 1}
            })
            console.log(t)
            console.log(s)
        })

    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }


    render() {
        return (
            <div className="appfooter">
                <input type="checkbox"/>
                <span>4/5 selected</span>
            </div>
        )
    }
}
