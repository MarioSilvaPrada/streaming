import styled from 'styled-components';

export const Wrapper = styled.form`
  min-width: 20rem;
  margin: 0 auto;
  border: 3px solid black;
  padding: 1.4rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: .5rem;
`;

export const StyledInput = styled.input`
  border: 1.5px solid black;
  width: 100%;
  padding: .5rem;
  margin-bottom: 1rem;
`;

export const Submit = styled.input`
  background: red;
  border: none;
  padding: .5rem 1rem;
  cursor: pointer;
  font-weight: bold;
`;
