import React from 'react';
export function Label({className='',...p}:React.LabelHTMLAttributes<HTMLLabelElement>){return <label className={`text-sm text-slate-300 ${className}`} {...p}/>}
export default Label;