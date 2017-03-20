import React from 'react';
import SearchBar from 'SearchBar';
import SpotifyAPI from 'SpotifyAPI';
import SongItem from 'SongItem';
import SongList from 'SongList';

export class SpotifyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tracks: [],
      activeTrackIndex: 0
    };
  }

  handleUpdateText = (text) => {
    this.setState({text})
  }

  fetchSongs = () => {
    var {text} = this.state;

    SpotifyAPI.searchSpotify(text)
      .then(({ tracks }) => this.setState({ tracks: tracks.items }))
  }

  handleSelectSong = (index) => {
    this.setState({ activeTrackIndex: index })
  }

  render() {
    const {text, tracks, activeTrackIndex} = this.state;
    console.log('spotify app tracks', tracks);

    return (
      <div>
        <div className='column row'>
          <div className='column small-centered'>
            <SearchBar onUpdateText={this.handleUpdateText} fetchSongs={this.fetchSongs}/>
            {tracks[activeTrackIndex] && <SongItem songData={tracks[activeTrackIndex]}/> }
            <SongList songList={tracks} onSelectSong={this.handleSelectSong}/>
          </div>
        </div>
      </div>
    )
  }
};

export default SpotifyApp;
