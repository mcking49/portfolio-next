export interface ProfileLink {
  name: string;
  url: string;
  iconURL: string;
  linkType: LinkType;
}

export type LinkType = "email" | "web";
