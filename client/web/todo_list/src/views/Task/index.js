import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as S from './styles';

//NOSSOS COMPONENTES
import Header from '../../components/Header';


function Task() {
  return (
    <S.Container>
      <Header/>
      
    </S.Container>
  );
}

export default Task;
