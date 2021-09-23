import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

const style = {
    width: '100%',
    height: '40px',
    border: '1px solid rgba(0,0,0,0.2)',
    outline: 'none',
    margin: '20px',
    background: 'none',
    borderRadius: '3px',
    padding: '5px 10px'
}

const btn = { ...style, width: '200px', cursor: 'pointer', height: '48px' }

const form = { display: "flex", boxShadow: "0px 5px 10px 0 rgba(0,0,0,0.1)", marginBottom: '50px' }

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.createPost(this.state)
        console.log(this.state)
    }

    render() {
        return (
            <>
                <form style={form} onSubmit={this.onSubmit}>
                    <input
                        style={style}
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <textarea
                        style={style}
                        name="body"
                        value={this.state.body}
                        onChange={this.onChange}>
                    </textarea>
                    <button
                        style={btn}
                    >
                        Submit
                    </button>
                </form>
            </>
        )
    }
}

export default connect(null, { createPost })(PostForm);