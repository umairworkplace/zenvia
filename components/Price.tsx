import { money } from "../lib/format";
export function Price({ value, compareAt }: { value: number; compareAt?: number }) { return <div className="price"><strong>{money(value)}</strong>{compareAt && compareAt > value ? <del>{money(compareAt)}</del> : null}</div>; }
