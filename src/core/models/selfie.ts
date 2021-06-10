import { SELFIE_PREFIX } from "@utilities";

export type ISelfieItem = {
  createdDate: string;
  createdTime: string;
  imageFile: string;
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

export const parseSavedSelfie = (): ISelfieItem => {
  const selfieDate = new Date(Date.now());
  const date = selfieDate.toDateString();
  const time = selfieDate.toTimeString();
  const imageName = `${SELFIE_PREFIX}${selfieDate}`;
  return {
    createdDate: date,
    createdTime: time,
    imageFile: `${imageName}.jpg`,
    id: imageName,
  };
};

export const parseSelfieList = (list: IInternalPhotoItem[]): ISelfieItem[] => {
  return list.map((item) => {
    const { uri, creationTime } = item;
    const createdDate = new Date(creationTime);
    const imageName = `${SELFIE_PREFIX}${creationTime}`;
    return {
      createdDate: createdDate.toDateString(),
      createdTime: createdDate.toTimeString(),
      imageFile: uri,
      id: imageName,
    };
  });
};
