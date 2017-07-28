//you can use import statements, like the one below
//var ReactDom = require("react-dom"); https://codepen.io/markhillard/pen/Hjcwu

import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery' ;
import Playlist from './playlist.js';
import Comment from './Comment';

//import { Playlist } from './playlist.js' ;

// class MusicApp extends React.Component {
 
//   render(){
//     var name="Sara";
//     return(
//       <h1>Welcome,  {name} {this.props.lastName}</h1>   
//     )
//   }
// }     
// // var name="Sara";
// var lastName="Gupta";
// ReactDom.render(<MusicApp person={name} lastName={lastName}/>,document.getElementById('root'));
function Welcome(p) {
  return <h1>Hello, {p.name}</h1>;
}

function App(){
  // const { comment } = this.props;
  return(
      <div>
        <Welcome name="Purnima" />;
        <Welcome name="Sara" />;
        <Welcome name="Priya" />;
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author} />                                                                                                              
      </div>
  )
}
// const element = <Welcome name="Sara" />;
ReactDom.render(
  <App/>,
  document.getElementById('root')
);
// var name = "Purnima";
// ReactDom.render(<MusicApp person={name} color={"text-primary"}/> , document.getElementById("container"));


/*function printMessage(person) {
  console.log("Welcome"+ person);
}

var name = "ashwin";
*/