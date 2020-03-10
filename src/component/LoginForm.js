import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'

function LoginForm({ authenticated, login, location }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    try {
      login({ id, password });
    } catch (e) {
      alert('Failed to login');
      setId('');
      setPassword('');
    }
  };
  const join = ()=>{

  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <div className='plain'>
      <input
        value={id}
        onChange={({ target: { value } }) => setId(value)}
        type="text"
        placeholder="아뒤"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="비번"
      />
      <button onClick={handleClick}>로긴</button>
        <button><span
        style={{
            fontSize:'15px'
        }}
        >혹은</span> 가입</button>
    </div>
  );
}

export default LoginForm;