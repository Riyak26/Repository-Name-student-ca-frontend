import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SubjectPage() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const subjects = [
    "Advance Machine Learning",
    "Cryptography and Network Security",
    "Deep Learning",
    "Development Engineering",
    "Web Development"
  ];

  const selectSubject = (subject) => {

    localStorage.setItem("subject", subject);

    navigate('/upload-ca');
  };

  const logout = () => {

  localStorage.clear();

  window.location.href = '/';
};

  return (

    <div
      style={{
        minHeight: '100vh',
        background: '#f3f4f6',
        padding: '40px 20px',
        fontFamily: 'Arial',
        position: 'relative'
      }}
    >

      {/* 3 DOTS MENU */}

      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px'
        }}
      >

        <button
  onClick={() => setMenuOpen(!menuOpen)}
  style={{
    background: '#4f46e5',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '14px',
    fontSize: '15px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(79,70,229,0.3)',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: '0.3s'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.background = '#4338ca';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0px)';
    e.currentTarget.style.background = '#4f46e5';
  }}
>
  📊 My Marks
</button>

        {menuOpen && (

          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '60px',
              background: 'white',
              borderRadius: '15px',
              width: '220px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              overflow: 'hidden',
              zIndex: 100
            }}
          >

            <div
              style={{
                padding: '15px',
                fontWeight: 'bold',
                background: '#f3f4f6'
              }}
            >
              📘 My Marks
            </div>

            {subjects.map((subject, index) => (

              <div
                key={index}
                onClick={() =>
                  navigate(`/student-marks?subject=${subject}`)
                }
                style={{
                  padding: '15px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee',
                  transition: '0.2s'
                }}
              >
                {subject}
              </div>

            ))}

            <div
              onClick={logout}
              style={{
                padding: '15px',
                cursor: 'pointer',
                color: 'red'
              }}
            >
              🚪 Logout
            </div>

          </div>

        )}

      </div>

      {/* PAGE CONTENT */}

      <div
        style={{
          maxWidth: '1200px',
          margin: 'auto'
        }}
      >

        <div
          style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}
        >

          <h1
            style={{
              fontSize: '42px',
              color: '#111827',
              marginBottom: '10px'
            }}
          >
            Select Subject
          </h1>

          <p
            style={{
              color: '#6b7280',
              fontSize: '18px'
            }}
          >
            Choose your subject to upload CA assignment
          </p>

        </div>

        {/* SUBJECT CARDS */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}
        >

          {subjects.map((subject, index) => (

            <div
              key={index}

              onClick={() => selectSubject(subject)}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  'translateY(-10px) scale(1.02)';

                e.currentTarget.style.boxShadow =
                  '0 15px 30px rgba(79,70,229,0.2)';

                e.currentTarget.style.background =
                  '#eef2ff';
              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  'translateY(0px) scale(1)';

                e.currentTarget.style.boxShadow =
                  '0 4px 15px rgba(0,0,0,0.08)';

                e.currentTarget.style.background =
                  'white';
              }}

              style={{
                background: 'white',
                borderRadius: '25px',
                padding: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
              }}
            >

              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  background: '#eef2ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '30px',
                  marginBottom: '20px'
                }}
              >
                📘
              </div>

              <h2
                style={{
                  color: '#111827',
                  fontSize: '22px',
                  marginBottom: '15px'
                }}
              >
                {subject}
              </h2>

              <p
                style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                Upload your CA PDFs and check marks.
              </p>

              <button
                style={{
                  marginTop: '25px',
                  background: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Open Subject
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default SubjectPage;