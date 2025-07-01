import { motion } from "framer-motion";
import CollectionMapper from "../components/CollectionMapper";
import DraggableList from "../components/DraggableList";
import fetchApi from "@/utils/strapi";


export default async function HomePage() {
  // Fetch card list data from Strapi
  const response = await fetchApi({ endpoint: "api/homepage?pLevel=4" });
  console.log("Response from Strapi:", response);

  let data = response?.data?.body;
  // Transform data to match CollectionMapper/CardList expectations
  if (!Array.isArray(data)) {
    if (data && data.card) {
      data = [
        {
          __component: "wrapper-component.card-wrapper",
          items: [
            {
              heading: {
                title: data.card.title,
                description: data.card.description,
              },
              featureList: (data.card.features || []).map((f: string) => ({ title: f })),
            },
          ],
        },
      ];
    } else {
      data = [];
    }
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <CollectionMapper data={data} />
      <div className="w-full flex flex-row justify-center">
        <DraggableList items={["React", "Vue", "Angular", "Svelte", "Solid"]} />
      </div>
   
      <div className="grid grid-cols-3 text-center">
        <div>
          <h1> With Object-cover </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img
              src="/sunset.jpg"
              className="w-60 h-60 object-cover"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-contain </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img
              src="/sunset.jpg"
              className="w-60 h-60 object-contain"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-fill </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img
              src="/sunset.jpg"
              className="w-60 h-60 object-fill"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-scale-down </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img
              src="/sunset.jpg"
              className="w-60 h-60 object-scale-down"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> Without object property </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img src="/sunset.jpg" className="w-60 h-60" alt="Sunset" />
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 text-center">
        <div>
          <h1> With Object-cover </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img src="/sunset.jpg" className="object-cover" alt="Sunset" />
          </div>
        </div>
        <div>
          <h1> With Object-contain </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img
              src="/sunset.jpg"
              className="w-full h-full object-contain"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-fill </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img
              src="/sunset.jpg"
              className="w-full h-full object-fill"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-scale-down </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img
              src="/sunset.jpg"
              className="w-full h-full object-scale-down"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> Without object property </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img src="/sunset.jpg" className="w-full h-full" alt="Sunset" />
          </div>
        </div>
      </div> */}
      <div className="w-2/3 flex justify-center mt-4">
        <img src="/Marketecture Diagram1_option A (2) (1).svg" />
      </div>
    </main>
  );
};
