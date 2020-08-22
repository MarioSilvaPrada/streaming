import React, { useEffect } from 'react';
import config from '../../config';
import * as S from './App.styled';

const App = () => {
  const { welcomeText } = config;
  const CONTENT_ID = '179058_c_559516';

  useEffect(() => {
    dacast(CONTENT_ID, 'video', {
      width: 500,
      height: 300,
      position: 'relative'
    });
  }, []);
  return (
    <S.Container>
      <S.Title>{welcomeText}</S.Title>
      <div id="video" />
    </S.Container>
  );
};

export default App;
