import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {

    UNSAFE_componentWillMount () {
        this.props.fetchPosts();
    }

    render() {
        return (
            <>{
                this.props.posts.map((item) => {
                    return (
                        <div key={item.id} style={{ boxShadow: "0 5px 10px 0 rgba(0,0,0,0.1)", padding: '20px', marginTop: '20px' }}>
                            <ul>
                                <li>{item.title}</li>
                                <li>{item.body}</li>
                            </ul>
                            <hr />
                        </div>
                    )
                })
            }
            </>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})


export default connect(mapStateToProps, { fetchPosts })(Posts);