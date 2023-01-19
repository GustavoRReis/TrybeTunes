import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/MusicCard';
import Loading from '../../components/Loading';
/* import MusicCard from '../components/MusicCard'; */
import './Album.css';

export default class Album extends Component {
  state = {
    artist: '',
    album: '',
    loading: false,
    trackList: [],
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.setState({ loading: true });
    const songs = await getMusics(id);
    console.log(songs);
    this.setState({
      artist: songs[0].artistName,
      album: songs[0].collectionName,
      loading: false,
      trackList: songs,
    });
  }

  render() {
    const { loading, trackList, artist, album } = this.state;
    /* console.log(album); */
    return (
      <div className="bodyAlbum" data-testid="page-album">
        {/* {loading && <Loading />} */}
        <Header />
        <div className="listaMusic">
          <div className="testdiv">
            <ul>
              <li className="listas" data-testid="album-name">
                {album}
              </li>
              <li className="listas" data-testid="artist-name">
                {artist}
              </li>
            </ul>
          </div>
          <div className="testdiv2">
            {trackList.slice(1).map((element, index) => (
              <MusicCard
                key={ index }
                trackId={ element.trackId }
                trackName={ element.trackName }
                previewUrl={ element.previewUrl }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string,
}.isRequired;
