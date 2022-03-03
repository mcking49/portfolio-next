import { collection, doc, getDoc } from "firebase/firestore";
import { firestore, firestoreConverter } from ".";
import { Profile } from "../../models";

const profileConverter = firestoreConverter<Profile>();
const profileCollection = collection(firestore, "profiles").withConverter(profileConverter);
const mitenProfileDocRef = doc(profileCollection, "miten");

/**
 * Get Miten's profile from firestore
 * @returns Miten's profile
 */
export async function getMitenProfileData(): Promise<Profile> {
  const snapshot = await getDoc(mitenProfileDocRef);
  return snapshot.data()!;
}
