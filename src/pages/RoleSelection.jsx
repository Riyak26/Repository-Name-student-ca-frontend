import { useNavigate } from 'react-router-dom';

function RoleSelection() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #eef2ff, #f8fafc)',
        fontFamily: 'Arial'
      }}
    >

      <div
        style={{
          background: 'white',
          padding: '50px',
          borderRadius: '30px',
          width: '420px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
        }}
      >

        <h1
          style={{
            color: '#4f46e5',
            marginBottom: '10px',
            fontSize: '40px'
          }}
        >
          EduFlow CA
        </h1>

        <p
          style={{
            color: '#64748b',
            marginBottom: '40px',
            fontSize: '17px'
          }}
        >
          Select your role to continue
        </p>

        {/* STUDENT BUTTON */}

        <button

          onClick={() => navigate('/student-register')}

          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow =
              '0 10px 20px rgba(79,70,229,0.3)';
          }}

          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0px)';
            e.target.style.boxShadow = 'none';
          }}

          style={{
            width: '100%',
            padding: '18px',
            marginBottom: '25px',
            border: 'none',
            borderRadius: '16px',
            background: '#4f46e5',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s'
          }}
        >
          Student Portal
        </button>

        {/* TEACHER BUTTON */}

        <button

          onClick={() => navigate('/teacher-register')}

          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow =
              '0 10px 20px rgba(15,23,42,0.2)';
          }}

          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0px)';
            e.target.style.boxShadow = 'none';
          }}

          style={{
            width: '100%',
            padding: '18px',
            border: 'none',
            borderRadius: '16px',
            background: '#0f172a',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s'
          }}
        >
          Teacher Portal
        </button>

      </div>

    </div>
  );
}

export default RoleSelection;