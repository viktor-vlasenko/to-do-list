import { Link } from "react-router-dom"
import { useState } from "react"

const Login = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    // add validation
    const isVerified = await verifyCredentials(email, password);
    if (!isVerified) {
      alert('User is not registered or credentials are invalid')
      setEmail('')
      setPassword('')
      return
    }
    onSignIn()
    setEmail('')
    setPassword('')
  }

  const verifyCredentials = async (email, password) => {
    const users = await getUsers();
    for (let user of users) {
      if (user.email === email && user.password === password) {
        return true;
      }
      continue;
    }
    return false;
  }

  const getUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();
    return users;
  }

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Email</label>
        <input type="text" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input type="password" placeholder="Your password"
          value={password} onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" className="btn btn-login" value="Sign In" />
      </div>
      <div className="register-link">
        <Link to='/register'>New here? Sign Up!</Link>
      </div>
    </form>
  )
}

export default Login