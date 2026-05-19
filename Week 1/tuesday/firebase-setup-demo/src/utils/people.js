import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

const fetchAllPeople = async () => {
  const querySnapshot = await getDocs(collection(db, "people"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export default fetchAllPeople;

// EXAMPLE RESPONSE - fetchAllPeople

// [
//     {
//         id: 'mLHvLbUjP2JUuQHvnHeb',
//         age: 21,
//         firstName: 'Arjun',
//         lastName: 'Ramakrishnan'
//     },
//     {
//         id: 'D6G7jLLic4dMh5jwnZec',
//         age: 19,
//         lastName: 'Doe',
//         firstName: 'John'
//     }
// ]
