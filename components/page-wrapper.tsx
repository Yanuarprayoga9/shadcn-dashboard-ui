import React from 'react'
import { Header } from './header';
import { Separator } from './ui/separator';
interface PageWrapperProps{
    children:React.ReactNode;
    headerTitle:string;
}
export const  PageWrapper:React.FC<PageWrapperProps>= ({headerTitle,children}) => {
  return (
    <div className='flex flex-col gap-y-4'>
        <Header title={headerTitle}/>
        <Separator className='font-bold'/>
        {children}
    </div>
  )
}

