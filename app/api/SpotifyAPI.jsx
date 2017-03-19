import axios from 'axios';
const SpotifyAPI = {
  searchSpotify: (searchTerm) => new Promise((resolve, reject) => {
    const result = axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`)
    result
      .then(({ data }) => {
        // console.log('SPOTIFY API: ', data);
        resolve(data)
      })
      .catch((err) => reject(err));
  })
}

export default SpotifyAPI;
