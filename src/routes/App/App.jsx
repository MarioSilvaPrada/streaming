import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import config from '../../config';
import * as S from './App.styled';

const App = () => {
  const { welcomeText } = config;
  const { pathname } = useLocation();

  const getVideo = () => {
    window.addEventListener('load', () => {
      const CONTENT_ID = '179058_c_559516';
      dacast(CONTENT_ID, 'video', {
        width: 500,
        height: 300,
        position: 'relative',
      });
    });
  };

  useEffect(
    () => {
      getVideo();
    },
    [pathname],
  );
  return (
    <S.Container>
      <S.Title>{welcomeText}</S.Title>
      <div id="video" />
    </S.Container>
  );
};

export default App;
