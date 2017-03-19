import React from 'react';

const eachSong = (props) => {
  const {album, name} = props;
  const albumImage = album.images[0];
  return (
    <div>
      <img src={albumImage.url} />
      <span>Name: {name}</span>
    </div>
  )
}

const SongList = (props) => (
    <div>
      {props.songList.map((songData, index) => {
        return (
          <div key={songData.uri} onClick={() => props.onSelectSong(index)}>
            {eachSong(songData)}
          </div>
        )
      })}
    </div>
)

SongList.propTypes = {
  songList: React.PropTypes.array,
  onSelectSong: React.PropTypes.func
}

export default SongList;
