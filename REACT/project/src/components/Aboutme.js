import React from 'react'
import thumbnail from '../images/reddithumb.png'

function AboutMe() {
    return (
      <div className="parentDivAboutme">
            <div className="aboutMeTitle">
                <img src={thumbnail} className="biggerRedditThumbnail" />
                    <span>r/portugal</span>
            </div>
            <p>Um lugar para discutir Portugal ou portugueses pelo mundo. — 
        A place to discuss Portugal and portuguese people around the world.</p>
            <div className="aboutMeInfo">
                <div className="tugas">
                    <span>222k</span>
                    <span className="text">Tugas</span>
                </div>
            <div className="bacalhau">
            <span>976</span>
            <span className="text">a comer bacalhau</span>
            </div>
            </div>
            <button className="aboutMeButton">Join</button>
      </div>
  
    )
  }
  
  export default AboutMe