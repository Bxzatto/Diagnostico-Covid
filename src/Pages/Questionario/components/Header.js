import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { HeaderLayout, Title } from '../../../layout/style';

export default function Header() {
    const {welcomeMessage} = useSelector((state) => state.diagnosticoReducer)
    
    
  return (
      <>
      <HeaderLayout className='mb-4'>
        <Title>{welcomeMessage}</Title> 
      </HeaderLayout>
    
    </>
  )
}