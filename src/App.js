import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RoleSelection from './pages/RoleSelection';

import StudentRegister from './pages/StudentRegister';
import StudentLogin from './pages/StudentLogin';

import TeacherRegister from './pages/TeacherRegister';
import TeacherLogin from './pages/TeacherLogin';

import SubjectPage from './pages/SubjectPage';
import UploadCA from './pages/UploadCA';

import TeacherSubjects from './pages/TeacherSubjects';
import TeacherSubmissions from './pages/TeacherSubmissions';

import EvaluateMarks from './pages/EvaluateMarks';
import Marksheet from './pages/Marksheet';
import StudentMarks from './pages/StudentMarks';

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route path='/' element={<RoleSelection />} />

        {/* STUDENT */}
        <Route path='/student-register' element={<StudentRegister />} />

        <Route path='/student-login' element={<StudentLogin />} />

        <Route path='/subjects' element={<SubjectPage />} />

        <Route path='/upload-ca' element={<UploadCA />} />

        <Route path='/student-marks' element={<StudentMarks />} />

        {/* TEACHER */}
        <Route path='/teacher-register' element={<TeacherRegister />} />

        <Route path='/teacher-login' element={<TeacherLogin />} />

        <Route path='/teacher-subjects' element={<TeacherSubjects />} />

        <Route path='/teacher-submissions' element={<TeacherSubmissions />} />

        <Route path='/evaluate' element={<EvaluateMarks />} />

        <Route path='/marksheet' element={<Marksheet />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;