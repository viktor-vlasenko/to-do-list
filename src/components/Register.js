import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Register = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !password || !password2) {
      alert('One of the fields is empty')
      return
    }
    if (password !== password2) {
      alert('Passwords are not the same')
      return
    }
    await onSignUp({ name, email, password })
    navigate('/')
    setEmail('')
    setName('')
    setPassword('')
    setPassword2('')
  }

  return (
    <form className="login-form" autoComplete="off" onSubmit={onSubmit} >
      <div className='form-control'>
        <label>Name</label>
        <input type="text" autoComplete="name" name='name' placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Email</label>
        <input type="text" autoComplete="email" name='email' placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input type="password" name='password' autoComplete="new-password" placeholder="Choose password"
          value={password} onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Confirm password</label>
        <input type="password" name='password2' autoComplete="new-password" placeholder="Enter password again"
          value={password2} onChange={e => setPassword2(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" className="btn btn-login" value="Sign Up" />
      </div>
      <div className="register-link">
        <Link to='/'>Already have an account? Sign In!</Link>
      </div>
    </form >
  )
}

export default Register