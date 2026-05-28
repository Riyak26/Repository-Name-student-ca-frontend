import { useEffect, useState } from "react";
import API from "../services/api";

function TeacherDashboard() {

  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {

    fetchSubmissions();

  }, []);

  const fetchSubmissions = async () => {

    try {

      const res = await API.get("/submissions");

      setSubmissions(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div
      style={{
        background: '#f3f4f6',
        minHeight: '100vh',
        padding: '25px',
        fontFamily: 'Arial'
      }}
    >

      <h1
        style={{
          color: '#111827',
          marginBottom: '10px'
        }}
      >
        Teacher Dashboard
      </h1>

      <p
        style={{
          color: '#6b7280',
          marginBottom: '30px'
        }}
      >
        Manage student submissions
      </p>

      <div
        style={{
          display: 'grid',
          gap: '20px'
        }}
      >

        {submissions.map((s) => (

          <div
            key={s.id}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}
          >

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >

              <div>

                <h2 style={{ margin: 0 }}>
                  {s.subjectName}
                </h2>

                <p style={{ color: '#6b7280' }}>
                  {s.caType}
                </p>

              </div>

              <div
                style={{
                  background:
                    s.status === "Evaluated"
                      ? '#dcfce7'
                      : '#fef3c7',

                  color:
                    s.status === "Evaluated"
                      ? '#166534'
                      : '#92400e',

                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  height: 'fit-content'
                }}
              >
                {s.status}
              </div>

            </div>

            <hr style={{ margin: '20px 0' }} />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >

              <div>

                <p>
                  <b>Student:</b> {s.studentName}
                </p>

                <p>
                  <b>Roll No:</b> {s.rollNo}
                </p>

                <p>
                  <b>Marks:</b> {s.marks ? s.marks : "Not Given"}
                </p>

              </div>

              <a
                href={`http://localhost:8080/uploads/${s.pdfName}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#4f46e5',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  textDecoration: 'none'
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

export default TeacherDashboard;