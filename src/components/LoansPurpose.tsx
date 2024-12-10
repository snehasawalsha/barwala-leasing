// import React from 'react';
// import { loanPurposes } from '../data';

// const LoanPurpose: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center py-10">
//       <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-custom">Loan's Purposes</h1>
//     <div className="bg-white p-6 rounded-lg  w-full flex flex-col items-center">      
//       <div className="flex flex-col space-y-6">
//         {loanPurposes.map((purpose) => (
//           <div key={purpose.id} className="flex items-center space-x-4">
//             <div className={`w-12 h-12 ${purpose.bgColor} flex items-center justify-center rounded-md`}>
//               <img src={purpose.icon} alt={`${purpose.title} Icon`} />
//             </div>
//             <div className="bg-gray-200 p-4 rounded-md">
//               <h2 className="text-lg font-semibold text-gray-800">{purpose.title}</h2>
//               <p className="text-sm text-gray-600">{purpose.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LoanPurpose;