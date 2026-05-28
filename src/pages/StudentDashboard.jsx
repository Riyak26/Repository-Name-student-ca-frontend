import { useEffect, useState } from 'react';
import API from '../services/api';

function StudentDashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const rollNo = localStorage.getItem("rollNo");

    const params = new URLSearchParams(window.location.search);

    const subject = params.get("subject");

    API.get(`/submissions/student/${rollNo}`)
      .then(res => {

        const filtered = res.data.filter(
          item => item.subjectName === subject
        );

        setData(filtered);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (

    <div
      style={{
        background: '#f4f5fb',
        minHeight: '100vh',
        padding: '30px',
        fontFamily: 'Arial'
      }}
    >

      <h1
        style={{
          color: '#1e293b',
          marginBottom: '10px'
        }}
      >
        My Marks
      </h1>

      <p
        style={{
          color: '#64748b',
          marginBottom: '30px'
        }}
      >
        View your evaluated marks and submission status
      </p>

      <div
        style={{
          display: 'grid',
          gap: '25px'
        }}
      >

        {data.map((item) => (

          <div
            key={item.id}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
            }}

            style={{
              background: 'white',
              padding: '25px',
              borderRadius: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: '0.3s',
              cursor: 'pointer'
            }}
          >

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >

              <div>

                <h2
                  style={{
                    margin: 0,
                    color: '#111827'
                  }}
                >
                  {item.subjectName}
                </h2>

                <p
                  style={{
                    color: '#6b7280',
                    marginTop: '5px'
                  }}
                >
                  {item.caType}
                </p>

              </div>

              <div
                style={{
                  background:
                    item.status === "Evaluated"
                      ? '#dcfce7'
                      : '#fef3c7',

                  color:
                    item.status === "Evaluated"
                      ? '#166534'
                      : '#92400e',

                  padding: '10px 18px',
                  borderRadius: '20px',
                  fontWeight: 'bold'
                }}
              >
                {item.status}
              </div>

            </div>

            <hr
              style={{
                margin: '20px 0',
                border: '1px solid #f1f5f9'
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >

              <div>

                <p
                  style={{
                    color: '#64748b',
                    marginBottom: '5px'
                  }}
                >
                  Marks Obtained
                </p>

                <h1
                  style={{
                    margin: 0,
                    color: '#4f46e5'
                  }}
                >
                  {item.marks ? item.marks : "Not Given"}
                </h1>

              </div>

              <a
                href={`http://localhost:8080/uploads/${item.pdfName}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: 'none',
                  background: '#4f46e5',
                  color: 'white',
                  padding: '12px 22px',
                  borderRadius: '12px',
                  fontWeight: 'bold'
                }}
              >
                View PDF
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default StudentDashboard;