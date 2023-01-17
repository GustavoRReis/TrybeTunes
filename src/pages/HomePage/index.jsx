/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    const arrayChumbado = [
      {
        collectionId: 574050396,
        generoMusic: 'Rock',
        collectionName: 'Back In Black',
        artworkUrl100:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/1e/14/58/1e145814-281a-58e0-3ab1-145f5d1af421/886443673441.jpg/100x100bb.jpg',
      },
      {
        collectionId: 1044543490,
        generoMusic: 'Funk',
        collectionName: 'Bang',
        artworkUrl100:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/25/82/b1/2582b1a7-0982-7daa-9c07-565b524b7170/825646005178.jpg/100x100bb.jpg',
      },
      {
        collectionId: 1506303120,
        generoMusic: 'Pagode',
        collectionName: 'Melhores Turma do Pagode',
        artworkUrl100:
          'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/c0/53/f5/c053f574-a9d7-2f1a-525f-aff7f2fcb9eb/886448383529.jpg/100x100bb.jpg',
      },
      {
        collectionId: 269572838,
        generoMusic: 'Anos 80',
        collectionName: 'Thriller',
        artworkUrl100:
          'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/100x100bb.jpg',
      },
      {
        collectionId: 548525301,
        generoMusic: 'MPB',
        collectionName: 'Tim Maia',
        artworkUrl100:
          'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/2c/a4/e3/2ca4e3a5-8bd0-ccb4-ef49-fcc7990c1f0a/Cover.jpg/100x100bb.jpg',
      },
      {
        collectionId: 337601272,
        generoMusic: 'Lo-Fi',
        collectionName: 'Lo-fi 2022',
        artworkUrl100:
          'https://is5-ssl.mzstatic.com/image/thumb/Music/b6/7e/10/mzi.atfseere.jpg/100x100bb.jpg',
      },
      {
        collectionId: 1440852353,
        generoMusic: 'Pop',
        collectionName: 'thank u, next',
        artworkUrl100:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/a5/39/86/a5398609-ad90-50d3-57ad-0f87a4df5ac4/14UMGIM28138.rgb.jpg/100x100bb.jpg',
      },
      {
        collectionId: 1517894593,
        generoMusic: 'Rap',
        collectionName: 'Recovery',
        artworkUrl100:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6a/da/5f/6ada5fd5-5e05-20bc-4bb0-6c0f1f0d91cd/10UMGIM14533.rgb.jpg/100x100bb.jpg',
      },
    ];

    return (
      <div className="bodyHome">
        <Header />
        <div className="headerHome">
          <div className="cabecalhoHome">
            <h1> </h1>
            <h1>Trybe Tunes</h1>
            <nav>
              <Link data-testid="link-to-search" to="/">
                <button className="buttonHeader" type="submit">
                  Sair
                </button>
              </Link>
            </nav>
          </div>
          <section className="boxHome">
            {arrayChumbado.map(
              ({
                collectionId,
                collectionName,
                artworkUrl100,
                generoMusic,
              }) => (
                <nav key={collectionId}>
                  <Link
                    className="link"
                    to={`/album/${collectionId}`}
                    data-testid={`link-to-album-${collectionId}`}
                  >
                    <ul className="cardsMain">
                      <li className="listas">
                        <div className="cardsHome">
                          <div className="formatCardsHome">
                            <h2>{generoMusic}</h2>
                            <img src={artworkUrl100} alt={artworkUrl100} />
                            <div>{collectionName}</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Link>
                </nav>
              )
            )}
          </section>
        </div>
      </div>
    );
  }
}
