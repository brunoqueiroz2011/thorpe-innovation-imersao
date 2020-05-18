import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as S from './styles';


//NOSSOS COMPONENTES
import Header from '../../components/Header';


function Login() {
  return (
    <S.Container>
      <Header/>
      <S.Form>
        <S.Input>
            <span>Email</span>
            <input type="text" placeholder=""/>
          </S.Input>
        <S.Input>
            <span>Password</span>
            <input type="text" placeholder=""/>
          </S.Input>
          <S.LinkRegister>
            <Link to="/register">Not registered? Sing Up</Link>
          </S.LinkRegister>
          <S.Login>
          <button type="button" to="/register">Sign in</button>
        </S.Login>
        </S.Form>
    </S.Container>
  );
}

export default Login;
