import React, { useState } from 'react'
import FormBuilder from './FormBuilder'
import CommentFeed from '../components/CommentFeed'


function CommentSection() { 
    const [commentList, setCommentList] = useState([]) 
    const addComment = (comment, name) => {
        setCommentList(
            [
                ...commentList, 
                {
                    name: name,
                    text:  comment
                }
            ]
         )
    }
    const removeComment = (text) => {
        const filteredArray = commentList.filter(comment => {
            return comment.text !== text
        })
        setCommentList(filteredArray)

    }

    return (
        <React.Fragment>
            <FormBuilder addCommentFunc={addComment} />
            <CommentFeed commentListVar={commentList} removeCommentFunc={removeComment}/>
        </React.Fragment>
    )
}

export default CommentSection;