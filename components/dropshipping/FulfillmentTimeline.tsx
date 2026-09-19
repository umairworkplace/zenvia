const steps=["pending","submitted","processing","shipped","delivered"];
export function FulfillmentTimeline({current}:{current:string}){const i=steps.indexOf(current);return <ol className="fulfillment-timeline">{steps.map((s,n)=><li key={s} className={n<=i?"active":""}>{s}</li>)}</ol>}
