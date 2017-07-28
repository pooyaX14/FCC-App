// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import Playlist from './playlist';

// class MusicApp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { //These are state variables
//             message: '',
//             apiKey: '',
//             name:''
                playlist:[];
//         };
//         //Add any new function if created
//         this.printName = this.printName.bind(this);
//     }
//     printName(){
//         var myInput = document.getElementById("myInput");
//         console.log(this);
//         this.setState({
//             name:myInput.value
//         });
    setSongs(songs) {
      this.setState({
        playlist:songs
      });
    }
//       }
//     // componentDidMount(){
//     //   this.printName(); //to render printName automatically after rendering the component
//     // }
    
//         displayMessage(){ 
//         var that = this;
//         this.setState({
//             message: "Welcome!"
//         });
//     }

//     render() {       
//         return (
//             <div  className={this.props.color}>
//                 Welcome to React Session 91Springboard {this.props.person}!
//                 <input type="text" placeholder="Enter your name" id="myInput"/>
//                 <button onClick={this.printName}>Enter</button>
//                 <h2>Your name is: {this.state.name} </h2>
//                 <Playlist />
//             </div>
//         );
//     }
// }
// var name="Purnima";
//  ReactDOM.render(<MusicApp person={name}/>,document.getElementById('root'));

// export default MusicApp;

//you can use import statements, like the one below
//var ReactDom = require("react-dom"); https://codepen.io/markhillard/pen/Hjcwu

import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery' ;
import Playlist from './playlist.js';
import Comment from './Comment';

//import { Playlist } from './playlist.js' ;

class MusicApp from React.Component {

}