// "use client"
// import React, { useEffect, useState } from 'react';

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/Api/topics", {
//       cache: "no-store",
//       method:"GET"
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics:", error);
//     return [];
//   }
// };

// const TopicsList = () => {
//   const [topics, setTopics] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchTopics = async () => {
//       const fetchedTopics = await getTopics();
//       setTopics(fetchedTopics);
//     };

//     fetchTopics();
//   }, []);

//   return (
//     <>
//       {topics.length > 0 ? (
//         topics.map((t: any) => (
//           <div key={t.id}>
//             <h2>{t.title}</h2>
//             <div>{t.description}</div>
//           </div>
//         ))
//       ) : (
//         <div>No topics available.</div>
//       )}
//     </>
//   );
// };

// export default TopicsList;
