import React from 'react';

const SongItem = (props) => {
  const { songData } = props;
  const songName = songData.name;
  const songTime = songData.duration_ms / 1000
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[1];
  console.log(album, albumName, albumImage);
  return (
    <div>
      <div>
        <img src={albumImage.url} />
        <p>{albumName}</p>
      </div>
      <div>
        <audio controls duration src={songData.preview_url} />
        <span>{songName}</span>
        <span>{songTime} s</span>
      </div>
    </div>
  )
}
export default SongItem;
