import styled from 'styled-components';

export const Wrapper = styled.form`
  min-width: 30rem;
  margin: 0 auto;
  border: 2px solid black;
  padding: 1.4rem 1rem;
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
`;

export const Label = styled.p`
  font-size: 1.1rem;
  margin-bottom: .5rem;
`;

export const StyledInput = styled.input`
  border: 1px solid black;
  width: 100%;
  padding: .5rem;
  margin-bottom: 1rem;
  border-radius: .5rem;
`;

export const Submit = styled.input`
  background: #ea5455;
  border: none;
  padding: .5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: .5rem;
`;
