import React, {Component } from 'react'
import './TodoList.css'

class TodoList extends Component{
    //componentDidUpdate() {
      //  this.props.inputElement.current.focus()
    //}
    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>             
                        <input placeholder="Enter Task Name"
                        ref={this.inputElement}
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput}/>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoList;