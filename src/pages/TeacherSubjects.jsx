function TeacherSubjects() {

  const subjects = [
    "Advance Machine Learning",
    "Cryptography and Network Security",
    "Deep Learning",
    "Development Engineering",
    "Web Development"
  ];

  const openSubject = (subject) => {

    window.location.href =
      `/teacher-submissions?subject=${subject}`;
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
            Teacher Subjects
          </h1>

          <p
            style={{
              color: '#6b7280',
              fontSize: '18px'
            }}
          >
            Select subject to manage student submissions
          </p>

        </div>

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
              onClick={() => openSubject(subject)}
              style={{
                background: 'white',
                borderRadius: '25px',
                padding: '30px',
                cursor: 'pointer',
                transition: '0.3s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                border: '2px solid transparent'
              }}

              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.border =
                  '2px solid #4f46e5';
              }}

              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.border =
                  '2px solid transparent';
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
                🎓
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
                View submissions, evaluate marks and manage CA
                PDFs for this subject.
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
                Manage Subject
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default TeacherSubjects;