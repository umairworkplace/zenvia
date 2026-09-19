"use client";
export function AiPromptChips({onPick}:{onPick:(value:string)=>void}){const prompts=["Find something under $50","Show gifts","What is trending?","Help me choose"];return <div className="ai-prompt-chips">{prompts.map(p=><button type="button" className="ghost" key={p} onClick={()=>onPick(p)}>{p}</button>)}</div>}
