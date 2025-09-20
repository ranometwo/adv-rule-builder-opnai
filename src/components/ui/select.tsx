import React,{createContext,useContext,useMemo,useState} from 'react';
type Ctx={open:boolean,setOpen:(o:boolean)=>void,value?:any,onValueChange?:(v:any)=>void};
const C=createContext<Ctx|null>(null);
export function Select({value,onValueChange,children}:{value?:any,onValueChange?:(v:any)=>void,children:any}){const[open,setOpen]=useState(false);const ctx=useMemo(()=>({open,setOpen,value,onValueChange}),[open,value,onValueChange]);return <C.Provider value={ctx}>{children}</C.Provider>}
export function SelectTrigger({className='',children,...p}:any){const c=useContext(C)!;return <button className={`w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-left ${className}`} onClick={()=>c.setOpen(!c.open)} {...p}>{children}</button>}
export function SelectValue({placeholder=''}:{placeholder?:string}){const c=useContext(C)!;return <span>{c.value??placeholder}</span>}
export function SelectContent({className='',children}:any){const c=useContext(C)!;if(!c.open) return null;return <div className={`mt-1 rounded-lg border border-slate-700 bg-slate-900 p-1 shadow-lg ${className}`}>{children}</div>}
export function SelectItem({value,children}:any){const c=useContext(C)!;return <div className='cursor-pointer rounded px-2 py-1 hover:bg-slate-800' onClick={()=>{c.onValueChange?.(value);c.setOpen(false)}}>{children}</div>}
export default Select;