var React = require("react");                //you can use import statements, like the one below
var ReactDom = require("react-dom");

import $ from 'jquery'



class Playlist extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = { //These are state variables
	        genres: []
	    };
	    
	    //this.deleteItem = this.deleteItem.bind(this);
	}

	componentDidMount() {

	}

	render() {
        <div>
        	Hi
        </div>

	}
} 

module.exports = {   
	Playlist: Playlist
}

