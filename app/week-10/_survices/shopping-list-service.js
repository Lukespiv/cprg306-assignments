import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
      const itemsRef = collection(db, `users/${userId}/items`);
      const q = query(itemsRef);
  
      const querySnapshot = await getDocs(q);
      const items = [];
  
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
  
      return items;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  };

  export const addItem = async (userId, item) => {
    try {
      const itemsRef = collection(db, `users/${userId}/items`);
  
      const docRef = await addDoc(itemsRef, item);
  
      console.log('Item added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding item:', error);
      throw error;
    }
  };