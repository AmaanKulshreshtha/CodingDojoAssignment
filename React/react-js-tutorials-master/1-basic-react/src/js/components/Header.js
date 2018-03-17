import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  render() {
      console.log(this.props); //  we can access to the title that injected into Header in Layout.js
      // through this.props 
      this.props.changeTitle("newTitle");
      return (
        <div>
            <Title title={this.props.title}/>
            <input />>
        </div>       
      );
  }
}