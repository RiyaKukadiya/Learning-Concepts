import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{padding: '1rem', background: '#f5f5f5', borderTop: '1px solid #ddd', marginTop: '2rem', textAlign: 'center'}}>
      <nav style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
        <Link href="/">Home</Link>
        <Link href="/http-status-code">HTTP Status Code</Link>
      </nav>
      <div style={{marginTop: '0.5rem', fontSize: '0.9rem', color: '#888'}}>© 2025 Learning Concepts</div>
    </footer>
  );
}
