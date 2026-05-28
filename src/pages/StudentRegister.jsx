import { useState } from 'react';
import API from '../services/api';

function StudentRegister() {

  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    department: ''
  });

  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const registerStudent = async () => {

    try {

      await API.post('/students', student);

      alert('Registration Successful');

      window.location.href = '/student-login';

    } catch (error) {

      console.log(error);

      alert('Registration Failed');
    }
  };

  return (

    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to bottom right, #f5f7ff, #e8edff)'
    }}>

      <div style={{
        width: '350px',
        background: '#fff',
        padding: '35px',
        borderRadius: '20px',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>

        <h2 style={{
          color: '#4f46e5',
          marginBottom: '10px'
        }}>
          EduFlow CA
        </h2>

        <h1 style={{
          marginBottom: '30px',
          color: '#333'
        }}>
          Student Register
        </h1>

        <input
          type='text'
          placeholder='Full Name'
          name='name'
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />

        <input
          type='email'
          placeholder='Email Address'
          name='email'
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />

        <input
          type='text'
          placeholder='Department'
          name='department'
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />

        <button
          onClick={registerStudent}
          style={{
            width: '100%',
            padding: '12px',
            background: '#4f46e5',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Register
        </button>

        <p style={{
          marginTop: '20px',
          color: '#666'
        }}>
          Already have an account?
        </p>

        <button
          onClick={() => window.location.href='/student-login'}
          style={{
            background: 'none',
            border: 'none',
            color: '#4f46e5',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default StudentRegister;