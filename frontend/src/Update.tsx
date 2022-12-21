import updateCreate from '@ipc/Update/updateCreate';
import updateDestroy from '@ipc/Update/updateDestroy';
import '@scss/Update.scss';
import React from 'react';
import { useState, useEffect } from 'react';

const Update: React.FC = () => {
  const [log, setLog] = useState('업데이트 확인중입니다...');
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    updateCreate(setLog, setProgress);
    return () => {
      updateDestroy();
    }
  }, [])
  return (
    <div className="Update p-1">
      <div className="mt-3 d-flex justify-content-center">
        <img src="update.png" alt="update"/>
      </div>
      <hr className="my-1 bg-white"></hr>
      <div className="log text-white">
        <p dangerouslySetInnerHTML={{__html:log}}></p>
      </div>
      <div className='mt-3 progress'>
        <progress max="10000" value={parseFloat(progress)*10000}></progress>
      </div>
    </div>
  );
}

export default Update;
