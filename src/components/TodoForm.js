import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTodo(this.state.task);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Task</label>
                <input
                    name="task"
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
        );
    }
}

export default TodoForm;