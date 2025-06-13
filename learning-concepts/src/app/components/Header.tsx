import Link from "next/link";

export default function Header() {
  return (
    <header style={{padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd'}}>
      <nav style={{display: 'flex', gap: '1rem'}}>
        <Link href="/">Home</Link>
        <Link href="/http-status-code">HTTP Status Code</Link>
      </nav>
    </header>
  );
}
