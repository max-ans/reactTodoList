import React from 'react';
import './index.scss';

class Form extends React.Component {

    handleSubmitForm = (event) => {
        event.preventDefault();

        this.props.newTaskSent();
    };

    render() {
        return (
            <div className="task_form">
                <form 
                    action="" 
                    className="form"
                    onSubmit={this.handleSubmitForm}
                >
                    <input 
                        type="text"
                        name="task"
                        id="task_input"
                        value={this.props.newTaskLabel} 
                        onChange={(event) => {
                            this.props.handleChange(event.target.value)
                        }}
                        className="form_input"   
                    />
                    <button type="submit" className="form_button">Write</button>
                </form>
            </div>
        )
    }
}

export default Form;