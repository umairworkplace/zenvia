import Link from "next/link";
export default function NotFound(){return <main className="page narrow"><p className="eyebrow">404</p><h1>That page drifted away.</h1><p className="muted">The page you requested does not exist.</p><Link className="primary" href="/">Back home</Link></main>}
