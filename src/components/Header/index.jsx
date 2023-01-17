import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { getUser } from '../../services/userAPI';
import './Header.css';
import logoLogin from '../../imagens/LogoTrybeTunes.png';

export default class Header extends Component {
  state = {
    name: '',
    loading: true,
  }

  async componentDidMount() {
    const user = await getUser();
    /* console.log(user); */
    this.setState({
      name: user.name,
      loading: false,
    }/* , console.log(user.name) */);
  }

  render() {
    const { name, loading } = this.state;
    /* if (loading) return <Loading />; */
    return (
      <header className="cabecalho" data-testid="header-component">
        <img src={logoLogin} alt="logo de Login" />
        <nav className="navCabecalho">
          <Link data-testid="link-to-search" to="/home">
            <button className="buttonHeader" type="submit">
              Home
            </button>
          </Link>
          <Link data-testid="link-to-search" to="/search">
            <button className="buttonHeader" type="submit">
              Search
            </button>
          </Link>
          <br />
          <Link data-testid="link-to-favorites" to="/favorites">
            <button className="buttonHeader" type="submit">
              Favorites
            </button>
          </Link>
          <br />
          <Link data-testid="link-to-profile" to="/profile">
            <button className="buttonHeader" type="submit">
              Profile
            </button>
          </Link>
        </nav>
        {loading ? (
          <Loading />
        ) : (
          <p className="userLogin" data-testid="header-user-name">
            {name}
          </p>
        )}
      </header>
    );
  }
}
