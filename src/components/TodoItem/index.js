// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {edit: false, updatedTitle: ''}

  onClickSave = () => {
    this.setState({edit: false})
  }

  onChangeUpdating = event => {
    this.setState({updatedTitle: event.target.value})
  }

  onClickEdit = () => {
    const {todo} = this.props
    this.setState({edit: true, updatedTitle: todo.title})
  }

  render() {
    const {todo, deleteTodo, onTaskComplete} = this.props
    const {id, title} = todo
    const {edit, updatedTitle} = this.state
    return (
      <li className="todo">
        {edit ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.onChangeUpdating}
            />
            <button className="save" onClick={this.onClickSave} type="button">
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onTaskComplete(id)}
            />
            <p className="title">{title}</p>
            <button className="edit" type="button" onClick={this.onClickEdit}>
              Edit
            </button>
            <button
              className="button"
              type="button"
              onClick={() => deleteTodo(id)}
            >
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
