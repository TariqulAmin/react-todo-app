import React , {Component} from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  state={
    items:[]
  }
  addItem = (item) => {
     let items= [...this.state.items,item]
     this.setState({
       items:items
     })
  }
  clearList = () => {
    this.setState({
      items:[]
    })
  }
  deleteItem = (id) =>{
    let items=this.state.items.filter(item =>{
         return item.id !== id
    })
    this.setState({
      items:items
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10 mx-auto mt-4">
          <TodoInput addItem={this.addItem} />
          <TodoList items={this.state.items} clearList={this.clearList} deleteItem={this.deleteItem} />
          </div>
        </div>
      </div>
    )
  }  
}

export default App;
