import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export const useDocument = (collection_name, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime data for document
  useEffect(() => {
    const ref = doc(projectFirestore, collection_name, id);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("no such document exists");
        }
      },
      (error) => {
        console.log(error.message);
        setError("failed to get document");
      }
    );

    return () => unsubscribe();
  }, [collection_name, id]);

  return { document, error };
};
