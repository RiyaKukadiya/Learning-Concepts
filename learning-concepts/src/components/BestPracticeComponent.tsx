type BestPracticeProps = {
  name: string;
  age?: number;
};

const BestPracticeComponent = ({ name, age }: BestPracticeProps) => (
  <div className="flex flex-col gap-2 p-4">
    <p className="text-sm text-gray-700">
      This is a React component defined With Best Practice (Modern, Typed, Arrow
      Function).
    </p>
    <pre className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
      <code>
        <div>
          <p className="text-lg font-semibold">
            Import the component and use it like this:
          </p>
          {`
 <BestPracticeComponent name="Bob" age={28} />
                `}
        </div>
        <div>
          <p className="text-lg font-semibold">Component structure:</p>
          <div className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
            {`
type BestPracticeProps = {
  name: string;
  age?: number;
};

export const BestPracticeComponent = ({ name, age }: BestPracticeProps) => (
  <div>
    Hello, {` +
              "`{name}`" +
              `}! {age && \`You are \${age} years old.\`}
  </div>
);

`}
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Output: </p>
          Hello, {name}! {age && `You are ${age} years old.`}
        </div>
      </code>
    </pre>
  </div>
);

export default BestPracticeComponent;
