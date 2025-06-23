export function FunctionDeclarationComponent() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <p className="text-sm text-gray-700">
        This is a React component defined using a named function declaration.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
        <code>
    {`export function FunctionDeclarationComponent() {
    return <div>Function Declaration Component</div>;
    }`}
        </code>
      </pre>
    </div>
  );
}
