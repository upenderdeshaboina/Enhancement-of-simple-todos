import {Component} from 'react'
// import {uuid} from 'uuidv4'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {TodoList: initialTodosList, title: '', countOfTodo: 1}

  deleteTodo = id => {
    const {TodoList} = this.state
    const updateTodosList = TodoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({TodoList: updateTodosList})
  }

  onChangeInput = event => {
    this.setState({title: event.target.value})
  }

  onClickAdd = () => {
    const {title, TodoList, countOfTodo} = this.state
    const regex = /\d$/
    const isTrue = regex.test(str)
    if (isTrue) {
      const newTodos = Array.from({length: parseInt(lastChar)}, (_, i) => ({
        id: Date.now() + i,
        title,
        completed: false,
      }))
      this.setState(prevState => ({
        TodoList: [...prevState.TodoList, ...newTodos],
        title: '',
        countOfTodo: 1,
      }))
    } else {
      const newTodo = {
        id: TodoList.length,
        title,
        completed: false,
      }
      this.setState(prev => ({
        TodoList: [...prev.TodoList, newTodo],
        title: '',
        countOfTodo: 1,
      }))
    }
  }

  onTaskComplete = id => {
    const {TodoList} = this.state
    const todoUpdated = TodoList.map(e =>
      e.id === id ? {...e, completed: !e.completed} : e,
    )
    this.setState({TodoList: todoUpdated})
  }

  render() {
    const {TodoList, title, countOfTodo} = this.state
    return (
      <div className="container">
        <div className="todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              className="input"
              type="text"
              onChange={this.onChangeInput}
              placeholder="ENTER THE TITILE"
              value={title}
            />
            <button className="btn" type="button" onClick={this.onClickAdd}>
              Add
            </button>
          </div>
          <ul className="list-container">
            {TodoList.map(eachItem => (
              <TodoItem
                todo={eachItem}
                key={eachItem.id}
                deleteTodo={this.deleteTodo}
                onTaskComplete={this.onTaskComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
