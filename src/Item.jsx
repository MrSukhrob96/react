import React from "react"
import classes from "./Item.module.css";

function Item(props) {

    let st = {
        maxWidth: '400px',
        boxShadow: '0 5px 10px 0 rgba(0,0,0,0.3)',
        marginBottom: '20px',
        padding: '20px'
    }

    return (
        <div>
            <div className={classes.card}>
                <div className="card-title">{props.title}</div>
                <div className="card-body">{props.body}</div>
                <button onClick={props.itemBtnOnClick}>click</button>
                <button onClick={props.itemBtnOnDelete}>delete</button>
            </div>
        </div>
    );

}

export default Item;