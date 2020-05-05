import React, { Component } from 'react'
import {v1 as uuid} from "uuid"; 

class TodoInput extends Component {
    state={
        id:0,
        item:''
    }
    handlerItem = (e)  =>{
        this.setState({
            id:uuid(),
            item:e.target.value
        })
    }
    handlerSubmit = (e) => {
      e.preventDefault()
        this.props.addItem(this.state)
        this.setState({
        id:uuid(),
        item:''
    })
      
    }
    render() {
        return (
            <div>
                <h3 className="text-capitalize text-center">To do Input</h3>
                <div className="card card-body">
                     <form onSubmit={this.handlerSubmit}>
                        <div className="input-group mb-3" >
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                  <i className="fa fa-book"></i> 
                                </div>
                            </div>
                            <input className="form-control" type="text" placeholder="Add A Todo Item" 
                                   value={this.state.item}
                                   onChange={this.handlerItem}
                                    />
                        </div>
                        <input className="btn btn-primary btn-block" type="submit" value="Add Item"/>
                    </form> 
                </div>
            </div>
        )
    }
}

export default TodoInput
