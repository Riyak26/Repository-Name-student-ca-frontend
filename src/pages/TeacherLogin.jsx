import { useState } from 'react';

function TeacherLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {

    if (email && password) {

      alert('Teacher Login Successful');

      window.location.href = '/teacher-subjects';

    } else {

      alert('Enter Details');
    }
  };

  return (

    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f4f6fb',
      fontFamily: 'Arial'
    }}>

      <div style={{
        width: '380px',
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>

        <p style={{
          color: '#4f46e5',
          fontSize: '14px',
          marginBottom: '10px'
        }}>
          🔒 Teacher Portal
        </p>

        <h1 style={{
          margin: '0',
          fontSize: '38px',
          color: '#111827'
        }}>
          Welcome back,
        </h1>

        <h2 style={{
          marginTop: '5px',
          color: '#111827'
        }}>
          Professor
        </h2>

        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          marginBottom: '30px'
        }}>
          Please enter your credentials to access your academic dashboard.
        </p>

        <div style={{ marginBottom: '20px' }}>

          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#374151',
            fontWeight: 'bold'
          }}>
            Institutional Email
          </label>

          <input
            type='email'
            placeholder='teacher@edu.com'
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #d1d5db',
              outline: 'none',
              fontSize: '15px'
            }}
          />

        </div>

        <div style={{ marginBottom: '15px' }}>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}>

            <label style={{
              color: '#374151',
              fontWeight: 'bold'
            }}>
              Password
            </label>

            <span style={{
              color: '#6366f1',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              Forgot?
            </span>

          </div>

          <input
            type='password'
            placeholder='••••••••'
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #d1d5db',
              outline: 'none',
              fontSize: '15px'
            }}
          />

        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '25px'
        }}>

          <input type='checkbox' />

          <span style={{
            marginLeft: '8px',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            Keep me authenticated for 30 days
          </span>

        </div>

        <button
          onClick={login}
          style={{
            width: '100%',
            padding: '14px',
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Sign In to Portal →
        </button>

        <p style={{
          textAlign: 'center',
          marginTop: '25px',
          color: '#6b7280'
        }}>
          Don't have an account?
        </p>

        <p
          onClick={() => window.location.href='/teacher-register'}
          style={{
            textAlign: 'center',
            color: '#4f46e5',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Register
        </p>

      </div>

    </div>
  );
}

export default TeacherLogin;