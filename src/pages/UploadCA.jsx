import { useState } from 'react';
import API from '../services/api';

function UploadCA() {

  const [studentName, setStudentName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [caType, setCaType] = useState('');
  const [file, setFile] = useState(null);

  const uploadFile = async () => {

    if (!file) {

      alert("Select PDF File");

      return;
    }

    const formData = new FormData();

    formData.append("studentName", studentName);
    formData.append("rollNo", rollNo);
    formData.append("subjectName", subjectName);
    formData.append("caType", caType);
    formData.append("file", file);

    try {

      await API.post('/submissions/upload', formData, {

        headers: {
          "Content-Type": "multipart/form-data"
        }

      });

      alert("CA PDF Uploaded Successfully");

    } catch (error) {

      console.log(error.response);

      alert("Upload Failed");
    }
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
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
          width: '100%',
          maxWidth: '500px',
          background: 'white',
          borderRadius: '30px',
          padding: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
        }}
      >

        <div style={{ textAlign: 'center' }}>

          <h1
            style={{
              color: '#111827',
              marginBottom: '10px',
              fontSize: '38px'
            }}
          >
            Upload CA PDF
          </h1>

          <p
            style={{
              color: '#6b7280',
              marginBottom: '35px'
            }}
          >
            Submit your assignment PDF securely
          </p>

        </div>

        {/* STUDENT NAME */}

        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '14px',
            border: '1px solid #d1d5db',
            fontSize: '16px',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />

        {/* ROLL NO */}

        <input
          type="text"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '14px',
            border: '1px solid #d1d5db',
            fontSize: '16px',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />

        {/* SUBJECT */}

        <select
          onChange={(e) => setSubjectName(e.target.value)}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '14px',
            border: '1px solid #d1d5db',
            fontSize: '16px',
            outline: 'none',
            background: 'white'
          }}
        >

          <option>Select Subject</option>

          <option>Advance Machine Learning</option>
          <option>Cryptography and Network Security</option>
          <option>Deep Learning</option>
          <option>Development Engineering</option>
          <option>Web Development</option>

        </select>

        {/* CA TYPE */}

        <select
          onChange={(e) => setCaType(e.target.value)}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '25px',
            borderRadius: '14px',
            border: '1px solid #d1d5db',
            fontSize: '16px',
            outline: 'none',
            background: 'white'
          }}
        >

          <option>Select CA</option>

          <option>CA1</option>
          <option>CA2</option>
          <option>CA3</option>

        </select>

        {/* FILE UPLOAD */}

        <div
          style={{
            border: '2px dashed #a5b4fc',
            borderRadius: '20px',
            padding: '35px 20px',
            textAlign: 'center',
            background: '#eef2ff',
            marginBottom: '30px'
          }}
        >

          <div
            style={{
              fontSize: '45px',
              marginBottom: '15px'
            }}
          >
            📄
          </div>

          <p
            style={{
              color: '#4b5563',
              marginBottom: '15px'
            }}
          >
            Drag and drop your PDF here
            <br />
            or browse files
          </p>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              width: '100%'
            }}
          />

          {file && (

            <p
              style={{
                marginTop: '15px',
                color: '#4f46e5',
                fontWeight: 'bold'
              }}
            >
              {file.name}
            </p>

          )}

        </div>

        {/* BUTTON */}

        <button
          onClick={uploadFile}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(to right, #4f46e5, #3b82f6)',
            color: 'white',
            border: 'none',
            borderRadius: '14px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s'
          }}
        >
          Submit Assignment
        </button>

      </div>

    </div>
  );
}

export default UploadCA;