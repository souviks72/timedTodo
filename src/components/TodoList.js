import React from 'react';
import {v4 as uuid} from 'uuid';

import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    create(task){
        let newTodo = {id: uuid(), completed: false, task};
        let newTodos = [...this.state.todos,newTodo];
        this.setState({
            todos: newTodos
        });
    }

    delete(id){
        let filteredTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos: filteredTodos});
    }

    edit(id,newTask){
        let updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: newTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    toggleCompleted(id){
        let todoList = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos: todoList});
    }

    render(){
    let todoList = this.state.todos.map(todo=> 
            <Todo 
                key={todo.id} 
                task={todo.task}
                id={todo.id}
                completed={todo.completed}
                deleteTodo={this.delete}
                editTodo={this.edit}
                toggleCompleted={this.toggleCompleted}
        />)
        return(
            <div>
                <TodoForm createTodo={this.create}/>
                <ul>
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default TodoList;