import {Dispatch, SetStateAction} from 'react';

export interface Props {
  single?: boolean;
  files: FileType[];
  setFiles: Dispatch<SetStateAction<FileType[]>>;
  options?: IOption[];
  multiSelectionLimit?: number;
  onlyImage?: boolean;
}

export interface FileType {
  base64?: string;
  uri?: any;
  width?: number;
  height?: number;
  fileSize?: number | null;
  type?: string | null;
  fileName?: string | null;
  duration?: number;
  bitrate?: number;
  timestamp?: string;
  id?: string;
}

export interface IOption {
  id: number;
  title: string;
  icon: string;
  show: boolean;
  onPress: () => void;
}