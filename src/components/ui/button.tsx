import React from 'react';
type Props=React.ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'default'|'secondary'|'outline'|'destructive'|'ghost',size?:'sm'|'icon'};
export const Button=React.forwardRef<HTMLButtonElement,Props>(function Btn({className='',variant='default',size,...props},ref){
const v={default:'bg-indigo-600 hover:bg-indigo-500 text-white',secondary:'bg-slate-700 hover:bg-slate-600 text-white',outline:'border border-slate-600 hover:bg-slate-800',destructive:'bg-rose-600 hover:bg-rose-500 text-white',ghost:'hover:bg-slate-800'}[variant];
const s=size==='sm'?'px-2 py-1 text-sm':size==='icon'?'p-2':'px-3 py-2';
return <button ref={ref} className={`rounded-xl ${v} ${s} ${className}`} {...props}/>;});
export default Button;