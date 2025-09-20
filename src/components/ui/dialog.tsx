import React,{createContext,useContext} from 'react';
const C=createContext<any>(null);
export function Dialog({open,onOpenChange,children}:{open:boolean,onOpenChange:(v:boolean)=>void,children:any}){return <C.Provider value={{open,onOpenChange}}>{children}</C.Provider>}
export function DialogTrigger({asChild,children}:{asChild?:boolean,children:any}){const c=useContext(C)!;const child=React.Children.only(children as any);return React.cloneElement(child as any,{onClick:()=>c.onOpenChange(true)})}
export function DialogContent({className='',children}:{className?:string,children:any}){const c=useContext(C)!;if(!c.open) return null;return <div className='fixed inset-0 z-50 flex items-center justify-center'><div className='absolute inset-0 bg-black/60' onClick={()=>c.onOpenChange(false)}/><div className={`relative z-10 w-[90vw] max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 p-4 ${className}`}>{children}</div></div>}
export function DialogHeader(p:any){return <div className='mb-2' {...p}/>} 
export function DialogTitle(p:any){return <h2 className='text-lg font-semibold' {...p}/>} 
export default Dialog;