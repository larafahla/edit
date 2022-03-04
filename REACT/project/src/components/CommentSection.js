import React, { useState } from 'react'
import FormBuilder from './FormBuilder'
import CommentFeed from '../components/CommentFeed'


const singleComment = {
    name: 'Lara',
    text: 'O ideal é ela conduzir em sítios sem movimento tipo zonas industriais ao fim de semana para combater a ansiedade de andar no meio do trânsito. Ela tem que ter confiança no carro primeiro. Acelerar e travar várias vezes para saber como o carro responde.'
}


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

    return (
        <React.Fragment>
            <FormBuilder addCommentFunc={addComment} />
            <CommentFeed commentListVar={commentList}/>
        </React.Fragment>
    )
}

export default CommentSection;