import { getAnalytics } from "firebase/analytics";
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { DocumentData, DocumentSnapshot, FirestoreDataConverter, FirestoreError, getFirestore, QueryDocumentSnapshot, QuerySnapshot, WithFieldValue } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

export interface QuerySnapshotObserver<T extends DocumentData> {
  next?: ((snapshot: QuerySnapshot<T>) => void) | undefined;
  error?: ((error: FirestoreError) => void) | undefined;
  complete?: (() => void) | undefined;
}

export interface SnapshotObserver<T extends DocumentData> {
  next?: ((snapshot: DocumentSnapshot<T>) => void) | undefined;
  error?: ((error: FirestoreError) => void) | undefined;
  complete?: (() => void) | undefined;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

/**
 * Convert type from Firestore types to local types.
 *
 * @returns {FirestoreDataConverter<T>} a Firestore converter instance that converts types.
 */
 export const firestoreConverter = <T>(): FirestoreDataConverter<T> => {
  return {
    toFirestore(data: WithFieldValue<T>): DocumentData {
      return data as DocumentData;
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): T {
      return snapshot.data() as T;
    },
  };
};
