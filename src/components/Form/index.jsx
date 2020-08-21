import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import config from '../../config';

import * as S from './Form.styled';

const Form = () => {
  const history = useHistory();
  const { userInputs } = config;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    setTimeout(() => {
      history.push('/streaming');
      setName('');
      setEmail('');
    }, 500);
  };

  return (
    <S.Wrapper
      method="POST"
      target="hidden_iframe"
      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdwc-7gdiAaClApUQ3Vz6oOr2bajuakYslVSffyMnM1JVxtHw/formResponse"
      onSubmit={() => onSubmit()}
    >
      <S.Label>{userInputs.Name}</S.Label>
      <S.StyledInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        name="entry.598555192"
      />
      <S.Label>{userInputs.Email}</S.Label>
      <S.StyledInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        name="entry.1523685262"
      />
      <S.Submit type="submit" value={userInputs.SubmitText} />
    </S.Wrapper>
  );
};

export default Form;
