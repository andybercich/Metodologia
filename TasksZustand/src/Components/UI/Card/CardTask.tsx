import { useState } from "react";
import { Task, TaskState } from "../../../Types/Task"
import style from "./CardTask.module.css"
import { CreateModal } from "../Modals/CreateModal/CreateModal";
import { confirmAlert } from "../Alerts/ServerBadAlert";
import { useTaskStore } from "../../../Store/TaskStore";

interface IPropsCard {
    task: Task;
  }

  export const CardTask: React.FC<IPropsCard> = ({ task }) => {
    const [modalEdit,setModalEdit] = useState<boolean>(false);
    const {removeTask,updateTask} = useTaskStore();

    return (
      <div onClick={async ()=>{
        const taskClick:Task={
          id:task.id,
          description: task.description,
          timeLimit: task.timeLimit,
          title: task.title,
          state: task.state === TaskState.Pending  ? TaskState.Completed : TaskState.Pending
        }
        const confirmar = await confirmAlert(`¿${task.state === TaskState.Pending ? "Completaste": "Dejarás pendiente"} esta tarea?`,"");
        {confirmar ?updateTask(task.id, taskClick) : null}


      }} className={Date.now() >= new Date(task.timeLimit).getTime() && task.state === TaskState.Pending 
        ? style.incomplete 
        : Date.now() <  new Date(task.timeLimit).getTime() && task.state === TaskState.Pending 
        ? style.pending 
        : style.completed }>

        <div className={style.data}>
          <p><b>Titulo:</b> {task.title}</p>
          <p><b>Descripcion:</b> {task.description}</p>
          <p><b>Fecha limite:</b>{task.timeLimit}</p>
        </div>

        <div onClick={(event)=>{event.stopPropagation()}} className={style.buttons}>
        <button className="btn btn-warning " onClick={()=>{setModalEdit(true)}}>Editar tarea</button>
        <button className="btn btn-danger " onClick={async ()=>{
          const confirm = confirmAlert("¿Estas seguro de querer borrar esta tarea?");
          {await confirm ? removeTask(task.id) : null}
        }}>Eliminar tarea</button>
        </div>
        {modalEdit ? <CreateModal task={task} onClose={setModalEdit}></CreateModal>: null}
      </div>

  );
};
