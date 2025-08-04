export interface GridType {
  image: string;
  title: string;
  description: string;
}

//created by Omodara Ayodele
//github: OmodaraAyo

export interface ApproachType {
  title: string;
  description: string;
}

//created by Omodara Ayodele
//github: OmodaraAyo

export interface GridComponentProps {
  data: Array<GridType>;
  imgBgPrimaryColor: string;
  imgBgSecondaryColor: string;
}

//created by Omodara Ayodele
//github: OmodaraAyo
export interface ApproachComponentProps {
  data: Array<ApproachType>;
}

//created by Omodara Ayodele
//github: OmodaraAyo
export interface HeroSection8Props {
  title: string;
  subTitle: string;
  description: string;
}

//created by Omodara Ayodele
//github: OmodaraAyo

export interface SidebarLinkProps {
  iconSrc: string;
  label: string;
  link: string;
}

//created by Omodara Ayodele
//github: OmodaraAyo

export interface CustomSelectProps {
    value: string;
    onChange: (selectedOption: string) => void;
    options: string[];
    placeholder?: string;
}

//created by Omodara Ayodele
//github: OmodaraAyo

//files types

export interface FileUploadProps {
  onFilesSelected: (files: FileList) => void
  accept: string
  dragActive: boolean
  onDragStateChange: (active: boolean) => void
}

//created by Omodara Ayodele
//github: OmodaraAyo

export interface ImagePreviewProps {
  isOpen: boolean
  file: File | null
  preview: string | null
  onClose: () => void
}

//created by Omodara Ayodele
//github: OmodaraAyo

export interface FileListProps {
  files: File[]
  filePreviews: { [key: string]: string }
  onPreview: (file: File) => void
  onRemove: (index: number) => void
}

//created by Omodara Ayodele
//github: OmodaraAyo

export interface FileIconProps {
  file: File
  filePreviews: { [key: string]: string }
}

//created by Omodara Ayodele
//github: OmodaraAyo