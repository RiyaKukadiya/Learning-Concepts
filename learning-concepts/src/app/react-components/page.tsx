import { FunctionDeclarationComponent } from "../components/FunctionDeclarationComponent";
import ArrowFunctionComponent from "../components/ArrowFunctionComponent";
import ImplicitReturnComponent from "../components/ImplicitReturnComponent";
import { PropsComponent } from "../components/PropsComponent";
import BestPracticeComponent from "../components/BestPracticeComponent";

export default function ComponentExamplesPage() {
  return (
    <main className="container mx-auto flex flex-col space-y-10">
      <h1 className="text-4xl text-center font-bold">React Component Syntax Examples</h1>
      <section>
        <h2 className="text-lg font-semibold">1. Function Declaration</h2>
        <FunctionDeclarationComponent />
      </section>
      <section>
        <h2 className="text-lg font-semibold">2. Arrow Function</h2>
        <ArrowFunctionComponent />
      </section>
      <section>
        <h2 className="text-lg font-semibold">3. Implicit Return Arrow Function</h2>
        <ImplicitReturnComponent />
      </section>
      <section>
        <h2 className="text-lg font-semibold">4. With Props (Function Declaration)</h2>
        <PropsComponent name="Alice" />
      </section>
      <section>
        <h2 className="text-lg font-semibold">5. Best Practice (Modern, Typed, Arrow Function)</h2>
        <BestPracticeComponent name="Bob" age={28} />
      </section>
    </main>
  );
}
