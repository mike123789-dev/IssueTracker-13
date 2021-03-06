import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { useAuth } from '../App';

const Page = styled.div`
  padding: 48px 200px;
  max-width: none !important;
  text-align: center;
`;

const Title = styled.h1``;

const LoginBox = styled.div`
  padding: 20px;
  margin: 40px auto;
  width: 500px;
  box-shadow: 0 0 3px gray;
  font-size: 16px;
`;

const LabelInputContainer = styled.label`
  display: flex;
  margin-bottom: 30px;
  flex-flow: column nowrap;
  align-items: left;
  text-align: left;
  gap: 10px;
`;

const InputLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const EmailInput = styled.input`
  height: 30px;
  font-size: 16px;
`;

const PasswordInput = styled.input`
  height: 30px;
  font-size: 16px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  border: none;
  color: #0366D6;
  background-color: transparent;
  cursor: pointer;
`;

const GitHubButton = styled.button`
  color: white;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
  width: 100%;
  background-color: #888888;
  border: none;
  cursor: pointer;
`;

export default function LoginPage() {
  let history = useHistory();
  let auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = (type) => async () => {
    if (type === 'SignIn') {
      auth.signIn({ email, password }, () => history.push('/'));
    }
    if (type === 'SignUp') {
      auth.signUp({ email, password }, () => history.push('/'));
    }
  };

  const changeHandler = (type) => (event) => {
    if (type === 'Email') {
      setEmail(event.target.value);
      return;
    }
    if (type === 'Password') {
      setPassword(event.target.value);
      return;
    }
  };

  return (
    <Page>
      <Title>이슈 트래커</Title>
      <LoginBox>
        <LabelInputContainer>
          <InputLabel>아이디</InputLabel>
          <EmailInput type='email' id='email' value={email} onChange={changeHandler('Email')}></EmailInput>
        </LabelInputContainer>
        <LabelInputContainer>
          <InputLabel>비밀번호</InputLabel>
          <PasswordInput type='password' id='password' value={password} onChange={changeHandler('Password')}></PasswordInput>
        </LabelInputContainer>
        <RowContainer>
          <Button onClick={clickHandler('SignIn')}>로그인</Button>
          <Button onClick={clickHandler('SignUp')}>회원가입</Button>
        </RowContainer>
        <GitHubButton>Sign in with GitHub</GitHubButton>
      </LoginBox>
    </Page>
  );
}
