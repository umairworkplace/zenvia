export type ProductQuestion={question:string;answer?:string};
export function normalizeQuestion(value:string){const q=value.trim();if(q.length<5)throw new Error("Question is too short");return q.slice(0,500);}
