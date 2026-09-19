import Link from "next/link";
export default function UnauthorizedPage(){return <main className="page narrow"><p className="eyebrow">ACCESS</p><h1>Access restricted.</h1><p className="muted">You don’t have permission to view this workspace.</p><Link className="primary" href="/">Return home</Link></main>}
