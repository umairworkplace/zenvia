"use client";
import {useRef} from "react";
export default function ThreeDPage(){const ref=useRef<HTMLDivElement>(null);return <main className="three-d-page"><div ref={ref} className="scene"><div className="orb orb-a"/><div className="orb orb-b"/><div className="scene-copy"><p className="eyebrow">ZENVERSE</p><h1>Shopping, reimagined in 3D.</h1><p>Interactive storefront foundations are ready for the Three.js product world.</p></div></div></main>}
