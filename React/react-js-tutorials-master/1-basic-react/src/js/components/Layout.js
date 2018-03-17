import React from "react";
// note here we import header to Layout not client.js
import Header from "./Header";
// 
import Footer from "./Footer"
// in order for client.js to use Layout class, u need to export it
export default class Layout extends React.Component {
  constructor(){
      super();
      this.state = { title: "Welcome"}; //Remember the advantage of state is that it only 
      // update when there is change, if no change it won't change at all
  }
  
  changeTitle(title){
    this.setState({title});  // same as this.setState({title: title}) more clean in ES6
  }

  getVal(){
      return "Get Value result";
  }

  render() {
      //const title = "Welcome Will!"
      setTimeout(()=>{
        this.setState({title: "Welcome Will!"}); // change state of name to Bob after 1 sec
      }, 2000)
      // console.log(this.state === null); // state by default is null
       
      // example on how you can include list in your ReAct Rendering
      var list = [
          <li>App Planning </li>,
          <li>Researching </li>,
          <li>Coding</li>,
      ];
      // Note we directly render the Header class here ! not header html tag
      // And embedded the list variable below the header
      // Not a good practice below for return 3 remember
      // Note that since we give header title property now, in Header.js we can access title 
      // through this.props
      const some_var = "Jeff";
      // if we don't do bind(this),  changeTitle will not work, it will not go to header.js to change title
      return (
          <div>
              <Header changeTitle={this.changeTitle.bind(this)} title={ this.state.title }/>
              <ul>
                  {list} 
              </ul>
              <h1>It's {this.getVal()}!</h1>
              <h1>It's {this.name}!</h1>
              <h1>This is the new headline</h1>
              <h1>The second line!</h1>
              <h1>
                It's {some_var}!
              </h1> 
              <h1> 
                    It's {(function(){return 3;})()}! 
              </h1>
              <Footer/>
          </div>
      );
  }
}