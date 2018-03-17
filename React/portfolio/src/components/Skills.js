import React, {Component} from 'react'; // same as React.Component
import '../App.css';


export default class Skills extends Component{
    render(){
        return(
            <div className="skills col-lg-4 clearfix" id="skills">
               <h3 class="hidden-lg-up">Skills</h3>
               <div class="skills col-lg-4 clearfix" id="skills">
               <h3 class="hidden-lg-up">Skills</h3>
               <div class="skill full" style="border-left: 4px solid rgb(135, 129, 189);">Javascript ES3/5/6</div>
               <div class="skill half" style="border-left: 4px solid rgb(189, 129, 129);">Html5</div>
               <div class="skill half" style="border-left: 4px solid rgb(132, 189, 129);">CSS3</div>
               <div class="skill half" style="border-left: 4px solid rgb(129, 175, 189);">React/Redux</div>
               <div class="skill half" style="border-left: 4px solid rgb(189, 153, 129);">AngularJs</div>
               <div class="skill half" style="border-left: 4px solid rgb(189, 186, 129);">NodeJs</div>
               <div class="skill half" style="border-left: 4px solid rgb(135, 129, 189);">React Native</div>
               <div class="skill half" style="border-left: 4px solid rgb(189, 129, 129);">Php</div>
               <div class="skill half" style="border-left: 4px solid rgb(132, 189, 129);">MySql</div>
               <div class="skill half" style="border-left: 4px solid rgb(129, 175, 189);">Linux</div>
               <div class="skill half" style="border-left: 4px solid rgb(189, 153, 129);">Nginx, Apache</div>
               <div class="skill half" style="border-left: 4px solid rgb(189, 186, 129);">Drupal</div>
               <div class="skill half" style="border-left: 4px solid rgb(135, 129, 189);">Wordpress</div>
               <div class="skill half" style="border-left: 4px solid rgb(189, 129, 129);">Webpack</div>
               <div class="skill half" style="border-left: 4px solid rgb(132, 189, 129);">Grunt</div>
               <div class="skill full" style="border-left: 4px solid rgb(129, 175, 189);">Photoshop, Illustrator, Indesign</div>

              </div>
            </div>
        )
    }

}