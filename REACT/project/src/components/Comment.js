import React from 'react'

const singleComment = {
    name: 'Lara',
    text: 'O ideal é ela conduzir em sítios sem movimento tipo zonas industriais ao fim de semana para combater a ansiedade de andar no meio do trânsito. Ela tem que ter confiança no carro primeiro. Acelerar e travar várias vezes para saber como o carro responde.'
}


let Comment = (props) => {
    return (
        <div className="commentContainer">
            <h3>{props.itemVar.name}</h3>
            <span>{props.itemVar.text}</span>
            <button className="removeCommentButton">Remove</button>
        </div>
    )
}

export default Comment;