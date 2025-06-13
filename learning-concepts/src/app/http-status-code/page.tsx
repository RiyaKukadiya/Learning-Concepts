export default function HttpStatusCodePage() {
  return (
    <main style={{padding: '2rem'}}>
      <h1>HTTP Status Codes</h1>
      <ul style={{lineHeight: '2'}}>
        <li>200 OK: Request succeeded</li>
        <li>201 Created: Resource created</li>
        <li>202 Accepted: Accepted request</li>
        <li>204 No Content: Accepted request</li>
        <li>301 Moved Permanently: Accepted request</li>
        <li>302 Found: Temporarily moved</li>
        <li>304 Not Modified: Not modified</li>
        <li>400 Bad Request: Bad request error</li>
        <li>401 Unauthorized: Needs authentication</li>
        <li>403 Forbidden: Access Forbidden</li>
        <li>404 Not Found: Resource Not Found</li>
        <li>405 Not Allowed: Method not allowed</li>
        <li>408 Request Timeout: Request timed out</li>
        <li>500 Internal Server Error: Server error</li>
        <li>501 Not Implemented: Not implemented</li>
        <li>502 Bad Gateway: Bad gateway error</li>
        <li>503 Service Unavailable: Service unavailable</li>
        <li>504 Gateway Timeout: Gateway Timeout</li>
      </ul>
    </main>
  );
}
