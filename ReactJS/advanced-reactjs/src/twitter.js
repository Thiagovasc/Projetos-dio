import React, { Component } from "react"

class Twitter extends Component {
 
    componentDidMount(){
        const {posts} = this.props
        console.log("componentDidMount", posts)
    }
    render(){
        return
        <div>
            teste
        </div>
    }
}

export default Twitter