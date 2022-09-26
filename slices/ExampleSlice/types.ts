/* --- STATE --- */
export interface ExampleState {
  number: number;
  post: Post | null;
  isFetching: boolean;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
