//sources used
//https://facebook.github.io/create-react-app/docs/adding-a-stylesheet
//https://facebook.github.io/react-native/docs/images

import React from "react";
import { Carousel } from "react-responsive-carousel";
import scout1 from './images/scout1.jpg';
import scout2 from './images/scout2.jpg';
import scout3 from './images/scout3.jpg';
import scout4 from './images/scout4.jpg';
import scout5 from './images/scout5.jpg';
import scout6 from './images/scout6.jpg';
import './index.css'; 

//here we are calling the Carousel component from the installed node module 
//(react-responsive carousel -- linked in README).
//If you'd like the image carousel to auto advnace, insert 'autoPlay' as parameter
//in the Carousel component call: <Carousel autoPlay>
export default () => (
  <Carousel>
    <div>
      <img src={scout4} />
      <p className="legend">Scout&#39;s first time exploring the state of Virginia</p>
    </div>
    <div>
      <img src={scout5} />
      <p className="legend">Not a usual occurence on a dog walk...</p>
    </div>
    <div>
      <img src={scout2} />
      <p className="legend">But one must be prepared for tree climbing when cat walking!</p>
    </div>
    <div>
      <img src={scout1} />
      <p className="legend" >And one must also be ready to answer a plethora of questions: 
      "um, is that a cat?"</p>
    </div>
    <div>
      <img src={scout3} />
      <p className="legend">"Why yes, it is a cat!"</p>
    </div>
    <div>
      <img src={scout6} />
      <p className="legend">A very curious cat.</p>
    </div>
  </Carousel>
);
