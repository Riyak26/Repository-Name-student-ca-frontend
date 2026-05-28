import { useEffect, useState } from 'react';
import API from '../services/api';

function StudentMarks() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetchMarks();

  }, []);

  const fetchMarks = async () => {

    try {

      const params = new URLSearchParams(window.location.search);

      const subject = params.get('subject');

      const rollNo = localStorage.getItem("rollNo");

      const response = await API.get(
        `/submissions/subject/${subject}`
      );

      // FILTER ONLY LOGGED IN STUDENT

      const filteredData = response.data.filter(
        item => item.rollNo === rollNo
      );

      setData(filteredData);

    } catch (error) {

      console.log(error);

      alert("Error Fetching Marks");
    }
  };

  return (

    <div
      style={{
        minHeight: '100vh',
        background: '#f3f4f6',
        padding: '40px 20px',
        fontFamily: 'Arial'
      }}
    >

      <div
        style={{
          maxWidth: '1000px',
          margin: 'auto'
        }}
      >

        <h1
          style={{
            fontSize: '40px',
            color: '#111827',
            marginBottom: '10px'
          }}
        >
          My Marks
        </h1>

        <p
          style={{
            color: '#6b7280',
            marginBottom: '40px'
          }}
        >
          View your subject marks and evaluation status
        </p>

        {data.length === 0 ? (

          <div
            style={{
              background: 'white',
              padding: '40px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}
          >

            <h2>No Marks Found</h2>

          </div>

        ) : (

          <div
            style={{
              display: 'grid',
              gap: '25px'
            }}
          >

            {data.map((item) => (

              <div
                key={item.id}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '25px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                }}
              >

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
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
                        marginTop: '8px'
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

                <hr style={{ margin: '20px 0' }} />

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
                        color: '#6b7280',
                        marginBottom: '8px'
                      }}
                    >
                      Marks
                    </p>

                    <h1
                      style={{
                        margin: 0,
                        color: '#4f46e5'
                      }}
                    >
                      {
                        item.marks == null
                          ? "Not Given"
                          : item.marks
                      }
                    </h1>

                  </div>

                  <a
                    href={`http://localhost:8080/uploads/${item.pdfName}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: '#4f46e5',
                      color: 'white',
                      textDecoration: 'none',
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

        )}

      </div>

    </div>
  );
}

export default StudentMarks;