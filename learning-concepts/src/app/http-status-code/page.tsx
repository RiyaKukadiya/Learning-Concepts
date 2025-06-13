import React from "react";
import statusCodesData from "../content/statuscode.json";
interface StatusCode {
  code: number;
  label: string;
  description: string;
}

const HttpStatusCodePage: React.FC = () => {
  const statusCodes = statusCodesData as StatusCode[];

  return (
    <div className="mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">HTTP Status Codes</h1>
      <ul className="flex flex-col justify-center items-start gap-2">
        {statusCodes.map((item) => (
          <li key={item.code} className="p-2 border border-black bg-white/20">
            <span className="font-semibold ">
              {item.code} {item.label}:
            </span>{" "}
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HttpStatusCodePage;
