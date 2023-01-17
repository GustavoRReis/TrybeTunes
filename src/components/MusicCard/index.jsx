/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import Loading from '../Loading';
import getMusics from '../../services/musicsAPI';
import './MusicCard.css';

export default class MusicCard extends React.Component {
  state = {
    loading: false,
  };

  async componentDidMount() {
    this.testChecked();
  }

  testChecked = async () => {
    const { trackId } = this.props;
    console.log(trackId);
    const data = await getFavoriteSongs();
    const favorites = data.find((favId) => (favId.trackId === trackId));
    /* const teste = favorites.map((e) => e); */
    console.log(favorites);
    this.setState({ favorite: favorites });
  };

  setMusic = async () => {
    const { trackId } = this.props;
    this.setState({ loading: true });
    const result = await getMusics(trackId);
    /* console.log(result); */
    await addSong(result);
    this.setState({ loading: false });
  };

  render() {
    const { trackId, trackName, previewUrl } = this.props;
    const { loading, favorite } = this.state;
    return (
      <div>
        <ul className="ulTest">
          {loading && <Loading />}
          <li className="listas" key={ trackId }>
            <div className="ulTest2">
              <p>{trackName}</p>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
              </audio>
              <label className="labelCard" htmlFor="favorite">
                <span>Favorita</span>
                <input
                  type="checkbox"
                  onChange={ this.setMusic }
                  data-testid={ `checkbox-music-${trackId}` }
                  checked={ favorite }
                />
              </label>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackId: PropTypes.string,
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;
