import React, { useEffect } from 'react';
import * as S from './App.styled';

const App = () => {
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

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <S.Container>
      <S.Title>Título</S.Title>
      <div id="video" />
    </S.Container>
  );
};

export default App;
