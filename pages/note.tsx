// import React from 'react';
// import Button from '../components/button';
// import NewNote from '../components/noteTemplet';
// import {useRouter} from 'next/router';

// export default function () {
//   const router = useRouter();
//   const navigate = (path: string) => () => {
//     router.push(path);
//   };
//   return (
//     <>
//       <div>
//         <div>
//           <Button onClick={navigate('/newNote')}>+</Button>
//         </div>
//       </div>
//     </>
//   );
// }

// pages/note.tsx
import {useRouter} from 'next/router';
import Button from '../components/button';

export default function Note() {
  const router = useRouter();
  const navigate = (path: string) => () => {
    router.push(path);
  };
  const {title, content} = router.query; // 쿼리에서 데이터 추출

  return (
    <>
      <div className='p-6'>
        <h1 className='text-4xl mb-4'>{title}</h1>
        <p className='text-lg'>{content}</p>
      </div>
      <div>
        <Button onClick={navigate('/newNote')}>+</Button>
      </div>
    </>
  );
}
