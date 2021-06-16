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

export const parseLocaleTime = (date: Date) => {
  return date.toLocaleTimeString([], {hour12: false})
}

export const parseSavedSelfie = (
  creationTime: number,
  imageUri: string
): ISelfieItem => {
  const selfieDate = new Date(creationTime);
  const date = selfieDate.toLocaleDateString();
  const time = parseLocaleTime(selfieDate);
  const imageName = `${SELFIE_PREFIX}${selfieDate}`;
  return {
    createdDate: date,
    createdTime: time,
    imageUri,
    id: imageName,
  };
};

export const parseLocaleDateToDate = (date: Date, time: string) => {
  const getFullTime = (time: string) => {
    const [fullTime, hours, minutes, seconds] = time.match(/(\d+)\:(\d+)\:(\d+)/)!;
    return {
      hours,
      minutes,
      seconds
    };
  };
  const {hours, minutes, seconds} = getFullTime(time);
  date.setHours(+hours, +minutes, +seconds);
  return date;
}

export const parseSelfieList = (list: IInternalPhotoItem[]): ISelfieItem[] => {
  return list.map((item) => {
    const { uri, creationTime } = item;
    const createdDate = new Date(creationTime);
    const imageName = `${SELFIE_PREFIX}${creationTime}`;
    return {
      createdDate: createdDate.toLocaleDateString(),
      createdTime: parseLocaleTime(createdDate),
      imageUri: uri,
      id: imageName,
    };
  });
};
