import React from "react";

const Workitem = ({ year, title, duration, details, company }) => {
  return (
    <ol className="flex flex-col md:flex-row relative mx-2 border-1 md:ml-4 border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 justify-start items-center ml-2 flex-row text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-blue-900 rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-blue-900">{title}</span>
          <br className="block md:hidden" />
          <span className="text-sm font-semibold text-blue-700">{company}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-500">
            {duration}
          </span>
        </p>
        <p className="my-2 text-sm text-justify text-stone-600">{details}</p>
      </li>
    </ol>
  );
};

export default Workitem;
