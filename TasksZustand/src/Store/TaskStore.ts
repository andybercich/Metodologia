import { create } from "zustand";
import { Task, TaskState } from "../Types/Task";

interface TaskStore {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: number, updatedTask: Partial<Task>) => void;
    removeTask: (id: number) => void;
  }


export const useTaskStore = create<TaskStore>((set, get) => ({
    tasks: [],
  
    addTask: (task) =>
      set((state) => ({ tasks: [...state.tasks, task] })),
  
    updateTask: (id, updatedTask) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, ...updatedTask } : task
        ),
      })),
  
    removeTask: (id) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      })),
  
    getTasksByState: () =>
      get().tasks,
  }));