import CardList from "./components/CardList";
import DraggableList from "./components/DraggableList";

const app = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <CardList />
      <div className="w-full flex justify-center">
        <DraggableList items={["React", "Vue", "Angular", "Svelte", "Solid"]} />
      </div>
    </main>
  );
};

export default app;