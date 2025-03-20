

import { useTaskStore } from "../../../Store/TaskStore";
import { TasksTests } from "../../../Types/TaskTest"
import { CardTask } from "../Card/CardTask"
import style from "./ListCards.module.css"

export const ListCards = () => {
  
  const { tasks } = useTaskStore();



  return (
    <div className={style.container}>
      
      {tasks.map((task) => (
          <CardTask task={task}></CardTask>
        ))}

    </div>
  )
}
