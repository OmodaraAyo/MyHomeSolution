export interface GridType {
    image: string;
    title: string;
    description: string;
}

export interface ApproachType {
  title: string;
  description: string;
}

export interface GridComponentProps {
  data: Array<GridType>;
  imgBgPrimaryColor: string;
  imgBgSecondaryColor: string;
}


export interface ApproachComponentProps {
  data: Array<ApproachType>;
}