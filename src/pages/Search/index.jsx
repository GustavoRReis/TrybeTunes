/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './Search.css';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

export default class Search extends Component {
  state = {
    pesquisa: '',
    buttonD: true,
    objectBand: [],
    inputBand: '',
    /* loading: false, */
  }

  validateSearch = () => {
    const { pesquisa } = this.state;
    const minimumOfCharacters = 1;
    if (pesquisa.length > minimumOfCharacters) {
      this.setState({ buttonD: false });
    } else {
      this.setState({ buttonD: true });
    }
  }

  validateButton = ({ target: { value } }) => {
    this.setState({ pesquisa: value }, () => this.validateSearch());
  };

  clickForm = async () => {
    const { pesquisa } = this.state;
    const objectSearch = await searchAlbumsAPI(pesquisa);
    console.log(objectSearch);

    this.setState({
      objectBand: objectSearch,
      inputBand: pesquisa,
      pesquisa: '',
      /* loading: true, */
    });
  }

  render() {
    const { buttonD, pesquisa, objectBand, inputBand,
      /* loading */ /* bandOrArtist */ } = this.state;
    return (
      <section className="search">
        <Header />
        <div className="bodySearch">
          <div className="menuForm">
            <form className="formulario">
              <label htmlFor="nameband">
                <input
                  placeholder="DIGITE SUA BANDA OU MUSICA"
                  className="inputPesquisar"
                  type="text"
                  data-testid="search-artist-input"
                  id="nameband"
                  name="pesquisa"
                  onChange={ this.validateButton }
                  value={ pesquisa }
                />
                <button
                  className="buttonForm"
                  type="button"
                  data-testid="search-artist-button"
                  disabled={ buttonD }
                  onClick={ this.clickForm }
                  /* value={ bandOrArtist } */
                >
                  Pesquisar
                </button>
              </label>
            </form>
            <div className="boxResultado">
              <div>
                {objectBand.length === 0 ? (
                  <p>Nenhum álbum foi encontrado</p>
                ) : (
                  <div className="resultadosSearch">
                    <h2>{`Resultado de álbuns de: ${inputBand}`}</h2>
                    <div className="bands">
                      {objectBand.map(
                        ({ collectionId, collectionName, artworkUrl100 }) => (
                          <nav key={ collectionId }>
                            <Link
                              className="link"
                              to={ `/album/${collectionId}` }
                              data-testid={ `link-to-album-${collectionId}` }
                            >
                              <ul>
                                <li className="listas">
                                  <div className="cardsBands">
                                    <div className="formatCards">
                                      <img
                                        src={ artworkUrl100 }
                                        alt={ artworkUrl100 }
                                      />
                                      <div>
                                        {collectionName}
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </Link>
                          </nav>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
