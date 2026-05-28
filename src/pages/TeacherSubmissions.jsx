import { useEffect, useState } from 'react';
import API from '../services/api';

function TeacherSubmissions() {

  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {

    const params = new URLSearchParams(window.location.search);

    const subject = params.get('subject');

    const res = await API.get(`/submissions/subject/${subject}`);

    setSubmissions(res.data);
  };

  useEffect(() => {

    fetchSubmissions();

  }, []);

  const giveMarks = async (id) => {

    const marks = prompt("Enter Marks");

    if (!marks) return;

    await API.put(`/submissions/marks/${id}`, null, {
      params: { marks }
    });

    fetchSubmissions();
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

      {/* LOGOUT BUTTON */}

      <button
        onClick={logout}
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          background: '#ef4444',
          color: 'white',
          border: 'none',
          padding: '12px 22px',
          borderRadius: '12px',
          fontSize: '15px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(239,68,68,0.3)'
        }}
      >
        Logout
      </button>

      <div
        style={{
          maxWidth: '1200px',
          margin: 'auto'
        }}
      >

        {/* HEADER */}

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
            Student Submissions
          </h1>

          <p
            style={{
              color: '#6b7280',
              fontSize: '18px'
            }}
          >
            Review uploaded assignments and evaluate marks
          </p>

        </div>

        {/* CARDS */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px'
          }}
        >

          {submissions.map((item) => (

            <div
              key={item.id}
              style={{
                background: 'white',
                borderRadius: '25px',
                padding: '25px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 4px 15px rgba(0,0,0,0.08)';
              }}
            >

              {/* TOP */}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}
              >

                <div
                  style={{
                    width: '65px',
                    height: '65px',
                    borderRadius: '18px',
                    background: '#eef2ff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '30px'
                  }}
                >
                  📘
                </div>

                <div
                  style={{
                    background:
                      item.status === 'Evaluated'
                        ? '#dcfce7'
                        : '#fef3c7',

                    color:
                      item.status === 'Evaluated'
                        ? '#166534'
                        : '#92400e',

                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >
                  {item.status}
                </div>

              </div>

              {/* DETAILS */}

              <h2
                style={{
                  marginBottom: '10px',
                  color: '#111827'
                }}
              >
                {item.studentName}
              </h2>

              <p style={{ color: '#6b7280' }}>
                <b>Roll No:</b> {item.rollNo}
              </p>

              <p style={{ color: '#6b7280' }}>
                <b>Subject:</b> {item.subjectName}
              </p>

              <p style={{ color: '#6b7280' }}>
                <b>CA Type:</b> {item.caType}
              </p>

              <p style={{ color: '#6b7280' }}>
                <b>Marks:</b>{" "}
                {item.marks !== null ? item.marks : 'Not Given'}
              </p>

              <hr
                style={{
                  margin: '20px 0',
                  border: '1px solid #f1f5f9'
                }}
              />

              {/* BUTTONS */}

              <div
                style={{
                  display: 'flex',
                  gap: '12px'
                }}
              >

                <a
                  href={`http://localhost:8080/uploads/${encodeURIComponent(item.pdfName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textDecoration: 'none',
                    textAlign: 'center',
                    background: '#4f46e5',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '12px',
                    fontWeight: 'bold'
                  }}
                >
                  View PDF
                </a>

                <button
                  onClick={() => giveMarks(item.id)}
                  style={{
                    flex: 1,
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Give Marks
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default TeacherSubmissions;