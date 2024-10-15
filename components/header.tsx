import React from 'react';
import {useRouter} from 'next/router';
export default function () {
  const router = useRouter();
  const navigate = (path: string) => () => {
    router.push(path);
  };
  return (
    <div className='font-bold h-10 bg-gray-300 flex justify-center rounded-none pt-2'>
      <span onClick={navigate('/')} className='cursor-pointer px-6'>
        홈
      </span>
      <span onClick={navigate('/note')} className='cursor-pointer px-6'>
        노트
      </span>
      <span onClick={navigate('/calendar')} className='cursor-pointer px-6'>
        달력
      </span>
    </div>
  );
}
