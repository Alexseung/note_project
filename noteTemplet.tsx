import React, { useEffect } from 'react';
import Button from './button';
import {useState} from 'react';
import {useRouter} from 'next/router';

export default function () {
  const router = useRouter();
  const navigate = (path: string) => () => {
    router.push(path);
  };

  const [notes, setNotes] = useState<string[]>([]);
  const [content, setContent] =useState('')
  const [inputValue, setInputValue] = useState('')

//   useEffect(() => {
//     return () => {
//       // 해당 컴포넌트 없어지면 추가 
//       if (inputValue.trim()) {
//         setNotes((prevNotes) => [...prevNotes, inputValue]);
//       }
//       console.log(notes);
//     };
//   }, []);
// // return에 함수가 있으면 무조건 끝날때 그 함수가 불리게된다. 조건에는 [] 뭐가 들어가도 좋고 일단 끝나면 불리게된다

const handleSubmit = () => {
  if (inputValue.trim()) {
    setNotes((prevNotes) => [...prevNotes, inputValue]);
    console.log([...notes, inputValue]); // 배열 확인용
  }
  router.push('/note'); // onClick에 직접 들어갔어야할 페이지 이동 여기에 같이 추가
};

const handleInputChange = (e) => {
  setInputValue(e.target.value);
};

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='제목'
          className='w-full-screen h-16 text-3xl outline-none pl-2'
          value={inputValue} 
          onChange={handleInputChange} 
        />

        <div>
          <textarea
            placeholder='내용'
            className='w-full-screen h-full-screen outline-none mt-6 pl-2'
          ></textarea>
        </div>
      </div>
      <div className='flex justify-end pr-6'>
        <Button onClick={handleSubmit}>완료</Button>
      </div>
    </>
  );
}


