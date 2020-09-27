import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: this.props.task,
            id: this.props.id,
            edit: false
        }
        this.onDelete = this.onDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
    }

    onDelete(){
        this.props.deleteTodo(this.state.id);
    }

    handleChange(e){
        this.setState({task: e.target.value});
    }

    showEditForm(){
        this.setState({edit: true});
    }

    handleEdit(){
        this.props.editTodo(this.state.id,this.state.task);
        this.setState({edit: false});
    }

    toggleStatus(){
        this.props.toggleCompleted(this.state.id);
    }

    render(){
        let todo = (
            <div>
                <h6 onClick={this.toggleStatus} className={this.props.completed? `completed`:``}>{this.state.task}</h6>
                <button onClick={this.showEditForm}>Edit</button>
                <button onClick={this.onDelete}>Delete</button>
            </div>
        )

        let editForm = (
            <form onSubmit={this.handleEdit}>
                <input
                    name="task"
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
        )
        let toDisplay = this.state.edit? editForm : todo;
        return(
            <div>
                {toDisplay}
            </div>
            
        )
    }
}

export default Todo;