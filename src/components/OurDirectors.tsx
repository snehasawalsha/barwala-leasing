// import React from 'react';
// import { director } from '../data';

// const OurDirectors: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center py-10">
//       <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-custom">
//         Our Directors
//       </h1>
//       <div className="flex justify-center items-center mb-10">
//         <div className="w-10 h-1 bg-black"></div>
//         <div className="w-4 h-4 bg-black rounded-full mx-2"></div>
//         <div className="w-10 h-1 bg-black"></div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {director.map((director, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
//             <img src={director.image} alt={`${director.name}'s portrait`} className="rounded-t-lg mb-4" />
//             <h2 className="text-xl font-semibold text-gray-800">{director.name}</h2>
//             <p className="text-gray-600 mb-4">{director.title}</p>
//             <div className="flex space-x-4">
//               <a href={director.facebook} className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
//               <a href={director.linkedin} className="text-blue-600"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurDirectors;