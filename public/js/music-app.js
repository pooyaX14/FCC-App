//you can use import statements, like the one below
//var ReactDom = require("react-dom"); https://codepen.io/markhillard/pen/Hjcwu

import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;

//import { Playlist } from './playlist.js' ;

class MusicApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { //These are state variables
            message: '',
            apiKey: '',
            playlist:[]
        };
 
        //this.getTopTracks = this.getTopTracks.bind(this);    //Add any new function if created
    }

    displayMessage(){ 
        var that = this;
        this.setState({
            message: "Welcome!"
        })
    }

    render() { 
        return (
            <div>
                Welcome to FCC!
            </div>
        )
        
    }

}     

ReactDom.render(<MusicApp/>, document.getElementById("container"));
