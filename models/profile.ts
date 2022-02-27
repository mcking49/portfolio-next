import { BaseData } from ".";
import { ProfileLink } from "./profileLink";

export interface Profile extends BaseData {
  statement: string;
  bio: string;
  displayPictureLgURL: string;
  displayPictureSmURL: string;
  resumeURL: string;
  links: ProfileLink[];
}
