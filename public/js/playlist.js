var React = require("react");                //you can use import statements, like the one below
var ReactDom = require("react-dom");

import $ from 'jquery'


class Playlist extends React.Component {
	constructor(props) {
        super(props);
        this.state = { //These are state variables
            playlist:[], 
        };
 
        this.displaySongs = this.displaySongs.bind(this);    //Add any new function if created
    }
	displaySongs() {
        var songs = [
            {
              artist:"Pink Floyd",
              title:"High Hopes"
            },
            {
              artist:"Iron",
              title:"Dance of death"
            }
        ];

        this.setSongs(songs);
		
	}
 	this.props.setSongs(songs)
    // setSongs(songs) {
    // 	this.setState({
    // 		playlist:songs
    // 	});
    // }
	render() {
		var playlist = this.state.playlist.map(function(song, iterator){
        return(
                <div key={iterator}>Artist:{song.artist} Title:{song.title}</div>
            );
        });
        return(
			<div>
				<button onClick={this.displaySongs}>Display Songs</button>
            	<h1>playlist is: { playlist }</h1>
        	</div>
        )
        

	}
} 

export default Playlist;
