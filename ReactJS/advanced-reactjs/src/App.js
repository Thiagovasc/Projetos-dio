import React, { Component } from "react"
import Twitter from "./twitter"

class App extends Component {
  render(){
    const posts = [{
      title: "teste",
      tags: "tech, web"

    }]
    return (
      <Twitter />
    )

  }
}

export default App