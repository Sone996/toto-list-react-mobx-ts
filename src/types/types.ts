export interface item {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface INewItemForm {
  userId: number;
  title: string;
  body: string;
}
