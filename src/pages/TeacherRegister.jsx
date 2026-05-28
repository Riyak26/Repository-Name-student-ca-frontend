import { useState } from 'react';
import API from '../services/api';

function TeacherRegister() {

  const [teacher, setTeacher] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {

    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    });
  };

  const registerTeacher = async () => {

    try {

      await API.post('/teachers', teacher);

      alert('Teacher Registered Successfully');

      window.location.href = '/teacher-login';

    } catch (error) {

      console.log(error);

      alert('Registration Failed');
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
        width: '420px',
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>

        <h2 style={{
          textAlign: 'center',
          color: '#4f46e5',
          marginBottom: '10px'
        }}>
          EduFlow CA
        </h2>

        <h1 style={{
          textAlign: 'center',
          marginBottom: '35px',
          color: '#111827'
        }}>
          Teacher Register
        </h1>

        <input
          type='text'
          placeholder='Full Name'
          name='name'
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #d1d5db',
            fontSize: '15px'
          }}
        />

        <input
          type='email'
          placeholder='Email Address'
          name='email'
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #d1d5db',
            fontSize: '15px'
          }}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '25px',
            borderRadius: '10px',
            border: '1px solid #d1d5db',
            fontSize: '15px'
          }}
        />

        <button
          onClick={registerTeacher}
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
          Register
        </button>

        <p style={{
          textAlign: 'center',
          marginTop: '25px',
          color: '#6b7280'
        }}>
          Already have an account?
        </p>

        <p
          onClick={() => window.location.href='/teacher-login'}
          style={{
            textAlign: 'center',
            color: '#4f46e5',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Login
        </p>

      </div>

    </div>
  );
}

export default TeacherRegister;