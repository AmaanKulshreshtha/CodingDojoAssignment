import React, {Component} from 'react'; // same as React.Component
import '../App.css';

export default class About extends Component{
   render() {
        return(
           <div className="col-sm-9 col-lg-6">
              <p>I have more than 18 years of desktop and mobile web development experience involving a wide variety of applications and industries.</p>
              <p>I started my career as software developer in test, I find myself really enthusiastic on front-end development, I made a major transition over the years to focus on development. 
                  For a while this translated to simply being good at html, 
                  css and knowing enough jquery to be dangerous. 
                  But once the Single Page App craze hit with so many interesting new possibilities on the front end, 
                  I found that it was time to take a deeper dive into engineering.</p>
              <p>In the time since the dust has settled, I’ve had a chance to work on some great projects on both the enterprise and the start-up level. 
                  I would love to speak with you about your needs and see how we can work together.</p>
              <h1>About me</h1>
           </div>
        )
   }
}