import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems (userId) {
    const q = query(
        collection(db, "users", userId, "items")
    );

    let items = [];  
    const queriedItems = await getDocs(q);

    queriedItems.forEach((doc) => {
        items.push({
            id: doc.id,
            data: doc.data()
        });
    });

    return items;
}

export async function addItem (userId, item) {
    const q = query(
        collection(db, "users", userId, "items")
    );

    const docRef = await addDoc(q, item);

    return docRef.id;
}