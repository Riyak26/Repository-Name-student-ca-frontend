import { useState } from 'react';

function EvaluateMarks() {

  const [, setMarks] = useState('');

  const submitMarks = () => {

    alert('Marks Submitted');

    window.location.href='/marksheet';
  };

  return (

    <div style={{ textAlign: 'center', marginTop: '100px' }}>

      <h1>Evaluate Marks</h1>

      <input
        type='number'
        placeholder='Enter Marks'
        onChange={(e) => setMarks(e.target.value)}
      />

      <br /><br />

      <button onClick={submitMarks}>
        Submit
      </button>

    </div>
  );
}

export default EvaluateMarks;