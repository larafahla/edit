import React from 'react'
import Comment from '../components/Comment'

function CommentFeed(props) {
    return (
        <React.Fragment>

            {props.commentListVar.map((comment, i) => {
                console.log(comment)
                return <Comment itemVar={comment} key={i} removeCommentFunc={props.removeCommentFunc}/>
                }
            )}
            
        </React.Fragment>
    )
}

export default CommentFeed;