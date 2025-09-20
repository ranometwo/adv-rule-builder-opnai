import React from 'react';
export function Card({className='',...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={`rounded-2xl border border-slate-800 bg-card shadow ${className}`} {...props}/>}
export function CardHeader(p:React.HTMLAttributes<HTMLDivElement>){return <div className='p-4 border-b border-slate-800' {...p}/>} 
export function CardContent(p:React.HTMLAttributes<HTMLDivElement>){return <div className='p-4' {...p}/>} 
export function CardTitle(p:React.HTMLAttributes<HTMLDivElement>){return <div className='font-semibold' {...p}/>} 
export default Card;