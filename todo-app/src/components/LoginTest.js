import { loginEmail, signupEmail } from '../firebase';
import { useState } from 'react';
function LoginTest() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginSuccess = (email, uid) => {
    console.log('로그인 성공', uid);
  };
  const handleLoginClick = () => {
    loginEmail(email, password).then((result) => {
      console.log(result);
      const user = result.user;
      loginSuccess(user.email, user.uid);
    });
  };
  const handleSignupClick = () => {
    signupEmail(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        loginSuccess(user.email, user.uid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLoginClick}>로그인</button>
      <button onClick={handleSignupClick}>회원가입</button>
    </>
  );
}
export default LoginTest;
