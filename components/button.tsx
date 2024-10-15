import React from 'react';
import {useRouter} from 'next/router';

interface ButtonProps {
  children: React.ReactNode; // 렌더링할 수 있는 모든 유형의 자식을 나타내는 타입
  // 컴포넌트의 자식으로 사용할 수 있는 모든 내용이 이 타입에 포함된다
  onClick?: () => void; // 매개변수 없는 함수를 정의했음
  // void는 함수가 아무것도 반환하지 않음을 의미한다. 즉, 함수가 실행된 후 값이 없다를 표시
  // 보통 이벤트 핸들러 함수는 결과를 반화하지 않기 때문에 void를 사용한다
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button
      onClick={onClick}
      className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700'
    >
      {children}
    </button>
  );
};

export default Button;
