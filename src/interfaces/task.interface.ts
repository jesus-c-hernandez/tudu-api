export interface Task {
  userId: string;
  description: string;
  state: 'complete' | 'incomplete';
}
