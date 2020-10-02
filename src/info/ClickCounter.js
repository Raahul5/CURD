import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increment = () =>{
        this.setState(prevState =>{
           return {
            count : prevState.count + 1
           }   
        })
    }
    render() {
        const {count} = this.state
        return (
            
            <div>
              <button onClick={this.increment}>Click {count} times</button>  
            </div>
        )
    }
}

export default ClickCounter
