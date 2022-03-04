import React from 'react'

let Comment = (props) => {
    const removeComment = () => {
        props.removeCommentFunc(props.itemVar.text)
    }
    return (
        <div className="commentContainer">
            <h3>{props.itemVar.name}</h3>
            <span>{props.itemVar.text}</span>
            <button className="removeCommentButton" onClick={removeComment}>Remove</button>
        </div>
    )
}

export default Comment;