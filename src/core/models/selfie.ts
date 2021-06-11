import { SELFIE_PREFIX } from "@utilities";

export type ISelfieItem = {
  createdDate: string;
  createdTime: string;
  imageUri: string;
  id: string;
};

export type IInternalPhotoItem = {
  id: string;
  filename: string;
  uri: string;
  creationTime: number;
  width: number;
  height: number;
};

export const parseSavedSelfie = (
  creationTime: number,
  imageUri: string
): ISelfieItem => {
  const selfieDate = new Date(creationTime);
  const date = selfieDate.toLocaleDateString();
  const time = selfieDate.toLocaleTimeString();
  const imageName = `${SELFIE_PREFIX}${selfieDate}`;
  return {
    createdDate: date,
    createdTime: time,
    imageUri,
    id: imageName,
  };
};

export const parseSelfieList = (list: IInternalPhotoItem[]): ISelfieItem[] => {
  return list.map((item) => {
    const { uri, creationTime } = item;
    const createdDate = new Date(creationTime);
    const imageName = `${SELFIE_PREFIX}${creationTime}`;
    return {
      createdDate: createdDate.toLocaleDateString(),
      createdTime: createdDate.toLocaleTimeString(),
      imageUri: uri,
      id: imageName,
    };
  });
};
