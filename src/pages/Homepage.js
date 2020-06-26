import React from 'react';
import MediaPosts from '../components/MediaPosts'
import anonymous from '../assets/img/anonymous_pp.png'
import '../assets/styles/Homepage.css'

const Homepage = () => {
    return(
        <div className= "homepage-container">
            <MediaPosts pp = {anonymous}/>
        </div>
    );
}

export default Homepage;