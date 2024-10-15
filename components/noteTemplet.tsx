// import React from 'react';
// import Button from './button';
// import {useState} from 'react';
// import {useRouter} from 'next/router';

// export default function () {
//   const router = useRouter();

//   const [notes, setNotes] = useState<JSX.Element[]>([]);
//   const handleAddNote = () => {
//     setNotes(prevNotes => [...prevNotes]);
//     router.push('/note');
//   };
//   return (
//     <>
//       <div>
//         <input
//           type='text'
//           placeholder='제목'
//           className='w-full-screen h-16 text-3xl outline-none pl-2'
//         />
//         <div>
//           <textarea
//             placeholder='내용'
//             className='w-full-screen h-full-screen outline-none mt-6 pl-2'
//           ></textarea>
//         </div>
//       </div>
//       <div className='flex justify-end pr-6'>
//         <Button onClick={handleAddNote}>완료</Button>
//       </div>
//     </>
//   );
// }

// NoteForm.tsx
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Button from './button';

export default function NoteForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    // 배열에 현재 내용 저장하고, note 페이지로 이동
    router.push({
      pathname: '/note',
      query: {title, content}, // 쿼리로 데이터 전달
    });
  };

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='제목'
          className='w-full-screen h-16 text-3xl outline-none pl-2'
          value={title}
          onChange={e => setTitle(e.target.value)} // 제목 상태 관리
        />
        <div>
          <textarea
            placeholder='내용'
            className='w-full-screen h-full-screen outline-none mt-6 pl-2'
            value={content}
            onChange={e => setContent(e.target.value)} // 내용 상태 관리
          ></textarea>
        </div>
      </div>
      <div className='flex justify-end pr-6'>
        <Button onClick={handleAddNote}>완료</Button>
      </div>
    </>
  );
}
