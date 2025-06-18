import CardList from "./components/CardList";
import DraggableList from "./components/DraggableList";

const app = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <CardList />
      <div className="w-full flex flex-row justify-center">
        <DraggableList items={["React", "Vue", "Angular", "Svelte", "Solid"]} />
      </div>
      <div className="w-2/3 flex justify-center mt-4">
        <img src="/Marketecture Diagram1_option A (2) (1).svg" />
      </div>
    </main>
  );
};

export default app;