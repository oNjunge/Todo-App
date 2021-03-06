
//import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react';
import TodoList from './TodoList';
import TodoItems from './TodoItems'

class App extends Component {
  constructor(){
    super()
    this.inputElement = React.createRef()
    this.state = {
      items:[], 
      currentItem: {key:'', text:''},
    }
  }
  addItem = e =>{
    e.preventDefault();
    const newItem = this.state.currentItem
    if(newItem !== ""){
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {text:'', key:''}
      })
    }
  }
  
  handleInput = e => {    
    console.log("Hello input")
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({currentItem})
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({items: filteredItems,})
  }
  render(){
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          inputElement={this.inputElement}
        />
        <TodoItems 
          entries={this.state.items} 
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default App;
