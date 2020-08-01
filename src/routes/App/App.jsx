import React, { useEffect } from 'react';
import * as S from './App.styled';

const App = () => {
  const getVideo = () => {
    window.addEventListener('load', () => {
      const CONTENT_ID = '179058_c_559455';
      dacast(CONTENT_ID, 'video', {
        width: 800,
        height: 600,
      });
    });
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <S.Container>
      <div id="video" />
    </S.Container>
  );
};

export default App;
