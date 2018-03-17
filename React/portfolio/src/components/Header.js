import React, {Component} from 'react'; // same as React.Component
import '../App.css';
import jgIcon from '../images/jg-logo.svg';
// <jgIcon class="jg-logo" width="42" height="42"></jgIcon>
export default class Header extends Component{
    render(){
        return(
            <div className="main-header">
                <h1>Jianfeng Sun <small>Full Stack Developer</small> </h1>
                <div class="hamburger hidden-md-up container-fluid">
                    <div>
                      <i class="fa fa-bars"></i>
                       "MENU"
                     </div>
                </div>
                <nav>
                    <ul class="main-nav">
                        <li class="hidden-xs-down"><a href="/#about">About</a></li>
                        <li class="hidden-xs-down"><a href="/#skills">Skills</a></li>
                        <li><a href="/#home"></a>
                            <img src={jgIcon} ></img>
                        </li>
                        <li class="hidden-xs-down"><a href="/#work">Work</a></li>                 
                        <li class="hidden-xs-down"><a href="/#contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="title-tagline-wrapper">
                        <h1>FRONT END ENGINEER</h1>
                        <h2>18 years of passion for creating modern, engaging full stack user experiences on desktop and mobile. At your service!</h2>
                    </div>
                    <div class="button-wrapper"><a href="/#work">
                        <button class="button button-green">See my work</button>
                        </a>
                </div>
            </div>
        )
    }
}