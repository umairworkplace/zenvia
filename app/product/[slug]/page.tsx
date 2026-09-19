import {notFound} from "next/navigation";
import {db} from "../../../lib/db";
import {Price} from "../../../components/Price";
import {Rating} from "../../../components/Rating";
import {ReviewForm} from "../../../components/ReviewForm";
import {ProductQuestionForm} from "../../../components/ProductQuestionForm";
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const product=await db.product.findUnique({where:{slug,active:true}});if(!product)notFound();return <main className="page"><p className="eyebrow">PRODUCT</p><section className="product-detail"><div className="product-hero">◇</div><div><h1>{product.name}</h1><Rating value={product.rating}/><Price value={product.price}/><p className="muted">{product.description}</p><p>{product.stock>0?`${product.stock} available`:`Currently unavailable`}</p><button className="primary" disabled={product.stock<1}>Add to cart</button></div></section><section className="detail-section"><h2>Reviews</h2><ReviewForm productId={product.id}/></section><section className="detail-section"><h2>Questions</h2><ProductQuestionForm/></section></main>}
