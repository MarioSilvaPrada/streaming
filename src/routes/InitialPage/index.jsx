import React from 'react';
import Form from 'components/Form';
import config from '../../config';
import * as S from './InitialPage.styled';

const InitialPage = () => {
  const { Title } = config;
  return (
    <S.Container>
      <S.Title>{Title}</S.Title>
      <Form />
    </S.Container>
  );
};

export default InitialPage;
