import React from 'react';
import Button from '../components/button';
import {useRouter} from 'next/router';
import noteTemplet from '../components/noteTemplet';

export default function () {
  const router = useRouter();
  const navigate = (path: string) => () => {
    router.push(path);
  };
  return <>
    <h1>ddd</h1>
    <button onClick={navigate('/newNote')}>+</button>
  </>
}

