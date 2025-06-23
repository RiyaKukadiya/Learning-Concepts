type Props = {
  name: string;
};

export function PropsComponent({ name }: Props) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <p className="text-sm text-gray-700">
        This is a React component defined With Props (Function Declaration).
      </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
        <code>
          <div>
            <p className="text-lg font-semibold">
              Import the component and use it like this:
            </p>
            {`
 <PropsComponent name="Alice" />
                `}
          </div>
          <div>
            <p className="text-lg font-semibold">Component structure:</p>
            {`
type Props = {
  name: string;
};

export function PropsComponent({ name }: Props) {
  return <div>Hello, {name}!</div>;
}
         `}
          </div>
          <div>
            <p className="text-lg font-semibold">Output: </p>
            Hello, {name}!
          </div>
        </code>
      </pre>
    </div>
  );
}
