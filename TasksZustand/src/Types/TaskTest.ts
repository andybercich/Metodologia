
import { Task, TaskState } from "./Task";

export const TasksTests: Task[] = [
  {
    id:1,
    title: "Hacer la compra",
    description: "Comprar leche, pan y huevos en el supermercado.",
    timeLimit: new Date(Date.UTC(2022, 0, 22)),
    state: TaskState.Pending,
  },
  {
    id:2,
    title: "Estudiar TypeScript",
    description: "Revisar los conceptos básicos y avanzados de TypeScript.",
    timeLimit: new Date(Date.UTC(2025, 4, 22)),
    state: TaskState.Pending,
  },
  {
    id:3,
    title: "Hacer ejercicio",
    description: "Completar una rutina de entrenamiento de 45 minutos.",
    timeLimit: new Date(Date.UTC(2022, 0, 22)),
    state: TaskState.Completed,
  },
];
