import { ProfileLink } from "./profileLink";

export interface Profile {
  statement: string;
  bio: string;
  displayPictureLgURL: string;
  displayPictureSmURL: string;
  resumeURL: string;
  links: ProfileLink[];
}
