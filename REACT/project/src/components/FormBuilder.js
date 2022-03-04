import React, { useState } from 'react'

function FormBuilder(props) {
    const [comment, setComment] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = () => {
        props.addCommentFunc(comment, name)
        setComment('') 
        setName('')
    }

    return (
        <div className="parentDivComments">
            <label for="text">Enter your name</label>
            <input type="text" className="nameInput" value={name} onChange={(e) => setName(e.target.value)}></input>
            <label for="text">Write your comment</label>
            <input type="text" className="commentInput" value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <button className="addCommentButton" onClick={handleSubmit}>Add Comment</button>
        </div>
    )
}

export default FormBuilder;