getData = ()=>{
    async function main(_this){
      try{
        let data = await axios({
          method:'GEt',
          url:"http://localhost:3001/posts/1"
        })
        let res = data.data
        _this.setState({
          id:res.id,
          title:res.title,
          author:res.author
        })
      }catch(err){
        alert(err)
      }

    }
    main(this)
    
  }