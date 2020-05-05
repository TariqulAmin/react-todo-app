import React, { Component } from 'react'

class TodoItem extends Component {

   
    
    render() {
        const {item}=this.props
        return (
            <div>
                <li className="list-group-item">
                    {item.item}
                    <div className="float-right">
                        <span><i className="fa fa-pencil text-primary  mr-2"></i></span>
                        <span onClick={()=>this.props.deleteItem(item.id)}><i className="fa fa-trash text-danger"></i></span>
                    </div> 
                    
                </li>
            </div>
        )
    }
}

export default TodoItem
