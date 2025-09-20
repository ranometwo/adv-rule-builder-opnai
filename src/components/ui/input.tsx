import React from 'react';
export const Input=React.forwardRef<HTMLInputElement,React.InputHTMLAttributes<HTMLInputElement>>(function I({className='',...p},ref){return <input ref={ref} className={`w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-600 ${className}`} {...p}/>});
export default Input;