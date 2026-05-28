import { useState } from 'react';

function StudentLogin() {

  const [email, setEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {

    if (email && password && rollNo) {

      alert('Login Successful');

      localStorage.setItem("studentEmail", email);
      localStorage.setItem("rollNo", rollNo);

      window.location.href = '/subjects';

    } else {

      alert('Enter All Details');
    }
  };

  return (

    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eef1ff'
    }}>

      <div style={{
        width: '400px',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>

        <h1 style={{
          color: '#4f46e5',
          marginBottom: '10px'
        }}>
          EduFlow CA
        </h1>

        <h2 style={{
          marginBottom: '40px',
          color: '#333'
        }}>
          Student Login
        </h2>

        <input
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />

        <input
          type='text'
          placeholder='Roll No'
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '25px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />

        <button
          onClick={login}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>

        <p style={{
          marginTop: '25px',
          color: '#555'
        }}>
          Don't have an account?
        </p>

        <button
          onClick={() => window.location.href='/student-register'}
          style={{
            background: 'none',
            border: 'none',
            color: '#4f46e5',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default StudentLogin;