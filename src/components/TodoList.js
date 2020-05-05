import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    handlerClear = () =>{
        this.props.clearList()
    }
    render() {
       const  { items }= this.props
        return (
            <div>
                <h3 className="text-center mt-5">To do List</h3>
                <ul className="list-group">
                    {
                        items.map(item =>{
                            return <TodoItem key={item.id} item={item} deleteItem={this.props.deleteItem} /> 
                        })
                    }
                   
                </ul>
                <input type="button" className="btn btn-danger btn-block mt-5" value="Clear" onClick={this.handlerClear} />
            </div>
        )
    }
}

export default TodoList
