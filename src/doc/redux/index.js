import React, { Component } from "react"
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";

class ReduxComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <PostForm />
                <Posts />
            </Provider>
        )
    }
}

export default ReduxComponent;



//       User
//         |
//         |
// dispatch(actionName, payload)
//         |
//         |
//     Action()
//         |
//         |
//     Reducer()
//         |
//         |
//      State{}