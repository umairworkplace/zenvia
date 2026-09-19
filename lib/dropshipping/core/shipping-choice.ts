export function chooseShipping(methods:{id:string;cost:number;etaDays?:number}[]){return [...methods].sort((a,b)=>(a.etaDays??999)-(b.etaDays??999)||a.cost-b.cost)[0];}
