import { DocumentReference, FieldValue, Timestamp } from "firebase/firestore";

export interface BaseData {
  createdAt: Timestamp | FieldValue;
  id: string;
  updatedAt: Timestamp | FieldValue;
}
