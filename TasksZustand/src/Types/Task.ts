export enum TaskState {
    Pending = "Pending",
    Completed = "Completed"
}
  
export interface Task {
  id:number
    title: string;
    description: string;
    timeLimit: string;
    state: TaskState;
}
