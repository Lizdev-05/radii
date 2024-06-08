// import React from "react";
// import { IoEllipsisVerticalOutline, IoCreateOutline } from "react-icons/io5";

// interface ViewItem {
//   title: string;
//   updated: string;
// }

// interface ChartItem {
//   title: string;
//   type: string;
//   updated: string;
// }

// const views: ViewItem[] = [
//   { title: "Views by Radii", updated: "4 days ago" },
//   { title: "Customer Movement", updated: "1 day ago" },
// ];

// const charts: ChartItem[] = [
//   { title: "Revenue by Product", type: "Doughnut", updated: "4 days ago" },
//   { title: "Total Sales in June", type: "Pie", updated: "4 days ago" },
// ];

// const MyViews: React.FC = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">My Views</h1>

//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Views</h2>
//           <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
//             <IoCreateOutline className="mr-2" />
//             Create View
//           </button>
//         </div>
//         <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
//           {views.map((view, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded shadow-sm flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="font-bold">{view.title}</h3>
//                 <p className="text-gray-500">Updated {view.updated}</p>
//               </div>
//               <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
//             </div>
//           ))}
//         </div>
//         <p className="mt-4 text-gray-500">Showing 1-10 of 15</p>
//       </div>

//       <div>
//         <div className="flex flex-col justify-between mb-4">
//           <h2 className="text-xl mb-4 font-semibold">Charts</h2>
//           <input
//             type="text"
//             placeholder="Search"
//             className="border p-2 rounded-lg w-[20%]"
//           />
//         </div>
//         <div className="grid grid-cols-1 w-3/5  sm:grid-cols-2 gap-4">
//           {charts.map((chart, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded shadow-sm flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="font-bold">{chart.title}</h3>
//                 <p className="text-gray-500">{chart.type}</p>
//                 <p className="text-gray-500">Updated {chart.updated}</p>
//               </div>
//               <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
//             </div>
//           ))}
//         </div>
//         <p className="mt-4 text-gray-500">Showing 1-10 of 15</p>
//       </div>
//     </div>
//   );
// };

// export default MyViews;

import React from "react";
import {
  IoEllipsisVerticalOutline,
  IoCreateOutline,
  IoSearchOutline,
} from "react-icons/io5";
import {
  FaChartPie,
  FaChartBar,
  FaChartLine,
  FaRulerCombined,
  FaUsers,
} from "react-icons/fa";

interface ViewItem {
  title: string;
  updated: string;
  icon: React.ReactNode;
}

interface ChartItem {
  title: string;
  type: string;
  updated: string;
}

const views: ViewItem[] = [
  {
    title: "Views by Radii",
    updated: "4 days ago",
    icon: <FaRulerCombined className="text-2xl mr-4" />,
  },
  {
    title: "Customer Movement",
    updated: "1 day ago",
    icon: <FaUsers className="text-2xl mr-4" />,
  },
];

const charts: ChartItem[] = [
  { title: "Revenue by Product", type: "Doughnut", updated: "4 days ago" },
  { title: "Total Sales in June", type: "Pie", updated: "4 days ago" },
];

const MyViews: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Views</h1>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Views</h2>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
            <IoCreateOutline className="mr-2" />
            Create View
          </button>
        </div>
        <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
          {views.map((view, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow-sm flex justify-between items-center"
            >
              <div className="flex items-center">
                {view.icon}
                <div>
                  <h3 className="font-bold">{view.title}</h3>
                  <p className="text-gray-500">Updated {view.updated}</p>
                </div>
              </div>
              <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <p className=" text-gray-500">Showing 1-10 of 15</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
            1
          </button>
          <button className="px-3 py-1 text-gray-700 rounded">2</button>
          <button className="px-3 py-1  text-gray-700 rounded">3</button>
          <button className="px-3 py-1  text-gray-700 rounded">4</button>
          <button className="px-3 py-1  text-gray-700 rounded">5</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1  text-gray-700 rounded">10</button>
        </div>
      </div>

      <div>
        <div className="flex flex-col mb-4">
          <h2 className="text-xl font-semibold mb-4">Charts</h2>
          <div className="relative w-[20%]">
            <input
              type="text"
              placeholder="Search"
              className="border p-2 rounded-lg w-full pl-10"
            />
            <IoSearchOutline className="absolute top-2 left-2 text-gray-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
          {charts.map((chart, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow-sm flex justify-between items-center"
            >
              <div className="flex items-center">
                {chart.type === "Doughnut" && (
                  <FaChartPie className="text-2xl mr-4" />
                )}
                {chart.type === "Pie" && (
                  <FaChartPie className="text-2xl mr-4" />
                )}
                {chart.type === "Bar" && (
                  <FaChartBar className="text-2xl mr-4" />
                )}
                {chart.type === "Line" && (
                  <FaChartLine className="text-2xl mr-4" />
                )}
                <div>
                  <h3 className="font-bold">{chart.title}</h3>
                  <p className="text-gray-500">{chart.type}</p>
                  <p className="text-gray-500">Updated {chart.updated}</p>
                </div>
              </div>
              <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className=" text-gray-500">Showing 1-10 of 15</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
            1
          </button>
          <button className="px-3 py-1 text-gray-700 rounded">2</button>
          <button className="px-3 py-1  text-gray-700 rounded">3</button>
          <button className="px-3 py-1  text-gray-700 rounded">4</button>
          <button className="px-3 py-1  text-gray-700 rounded">5</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1  text-gray-700 rounded">10</button>
        </div>
      </div>
    </div>
  );
};

export default MyViews;
