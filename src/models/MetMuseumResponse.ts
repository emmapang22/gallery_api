export type Search = {
  objectIDs: number[];
};

export type Artwork = {
  objectID: number;
  primaryImage: string;
  primaryImageSmall: string;
  additionalImages: string[];
  objectName: string;
  objectDate: string;
  title: string;
  period: string;
  artistDisplayName: string;
  artistDisplayBio: string;
  medium: string;
  dimensions: string;
};
