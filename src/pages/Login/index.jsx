/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import './Login.css';
import propTypes from 'prop-types';
import { createUser } from '../../services/userAPI';
/* import Loading from '../../components/Loading'; */
import logoLogin from '../../imagens/LogoTrybeTunes.png';
import videoFundo from '../../imagens/videoFundo.mov';

export default class Login extends Component {
  state = {
    name: '',
    buttonDisabled: true,
    /* loading: false, */
  };

  minimumToValidate = () => {
    const { name } = this.state;
    const minimumOfCharacters = 2;
    if (name.length > minimumOfCharacters) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  };

  enableButton = ({ target: { value } }) => {
    this.setState({ name: value }, () => this.minimumToValidate());
  };

  clickNameSave = async () => {
    const { name } = this.state;
    const { history } = this.props;
    /* this.setState({ loading: true }); */
    await createUser({ name });
    history.push('./home');
  };

  render() {
    const { /* name */ buttonDisabled/* , loading */ } = this.state;
    /* if (loading) return <Loading />; */
    return (
      <div className="Login" data-testid="page-login">
        <video autoPlay loop muted>
          <source src={ videoFundo } type="video/mp4" />
        </video>
        <div className="caixaLogin">
          <div className="inputsLogin">
            <img src={ logoLogin } alt="logo de Login" />
            <form className="boxForm">
              <div className="boxInput">
                <input
                  className="inputNome"
                  placeholder="Digite seu Nome"
                  type="text"
                  data-testid="login-name-input"
                  name="name"
                  onChange={ this.enableButton }
                />
              </div>
            </form>
            <button
              className="buttonLogin"
              data-testid="login-submit-button"
              type="submit"
              disabled={ buttonDisabled }
              onClick={ this.clickNameSave }
            >
              Entrar
            </button>
          </div>
        </div>
        {/*   <div>{loading && <Loading />}</div> */}
      </div>
    );
  }
}
Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
