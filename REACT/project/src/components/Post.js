import React from 'react'
import thumbnail from '../images/reddithumb.png'
import CommentSection from './CommentSection'

function Post() {
  return (
    <div className="parentDiv">
        <div className="infoDiv">
        <img src={thumbnail} className="redditThumbnail" />
        <span className="postInfo">r/portugal • Posted byu/andhegoeshegoes 4 hours ago</span>
        </div>
        <h1 className="postTitle">Medo de conduzir</h1>
        <span className="helpText">Ajuda/Help</span>
        <p className="postText">A minha namorada tirou a carta de condução há cerca de um ano. Desde então, quase não pegou no carro (apenas duas vezes), e tem medo de conduzir. Estou sempre a insistir e ela diz que vai fazer duas ou três aulas numa escola de condução para voltar a aprender o que desaprendeu neste tempo, mas não parece muito decidida acerca disso. Tenho receio de andar a insistir e como ela é meia nervosa mete-se num acidente "por minha culpa", por ter andado a insistir para ela conduzir e não perder o hábito. O que fariam no meu caso? Vale a pena insistir com alguém que tem muita ansiedade e receio da estrada? Acham que há pessoas "que não deveriam conduzir" devido a esses medos e ansiedades?</p>
        <div className="postOptions">
            <p>114 comments</p>
            <p>Share</p>
            <p>Save</p>
            <p>Hide</p>
            <p>Report</p>
        </div>
    </div>

  )
}

export default Post;