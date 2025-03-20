import { useEffect } from "react";
import { useForm } from "../../../../Hooks/useForm";
import { useTaskStore } from "../../../../Store/TaskStore";
import { Task, TaskState } from "../../../../Types/Task"
import { badContest, godContest } from "../../Alerts/ServerBadAlert";
import { Close } from "../../Icons/CloseIcon/Close";
import style from "./CreateModal.module.css"
import { FormatLocalDate } from "../../../Funtions/FormatLocalDate";
interface IPropsCreate{
    task?: Task
    onClose:  React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateModal: React.FC<IPropsCreate> = ({ task, onClose }) => {
  const { updateTask, addTask } = useTaskStore();

    const { values, handleChange, resetForm } = useForm({
        title: task? task.title : "",
        state: task? task.state : "",
        description: task? task.description : "",
        timeLimit:task ? FormatLocalDate(new Date(task.timeLimit)) : new Date().getTime()
    });
  
    const stateTask = [
        { value: TaskState.Pending, label: "Pendiente" },
        { value: TaskState.Completed, label: "Completada" }
      ];
  
    const handleSubmit = async (event: React.FormEvent)=>{
      event.preventDefault();
      try{

            const newTask: Task ={
                id: task? task.id: Date.now(),
                description: values.description,
                state: values.state,
                title: values.title,
                timeLimit: values.timeLimit

            }
            {task ? updateTask(task.id, newTask) :addTask(newTask); }
            resetForm();
            godContest(`Se ha ${task ? "editado" :"creado"} la tarea correctamente`);
            onClose(false);
            
        } catch (error) {
  
        console.log(error)
        badContest("La tarea no se pudo crear correctamente")
  
      }
    }
  
  
  
  
  
    
  
  
    return (
      <div className={style.mainDiv}>
        <div onClick={(event) => event.stopPropagation()} className={style.modalUser}>
          {task ? (
            <h1 className={style.titulo}>Editar Tarea</h1>
          ) : (
            <h1 className={style.titulo}>Crear Tarea</h1>
          )}
    
          <div className={style.divClose}>
            <Close close={onClose} />
          </div>
    
          <form onSubmit={handleSubmit} className={style.formularios}>
  
  
            <input
              name="title"
              placeholder="Ingrese el titulo de la tarea"
              type="text"
              required
              value={values.title}
              onChange={handleChange}
            />
  
            <input
              name="description"
              placeholder="Ingrese la descripcion de la tarea"
              type="text"
              value={values.description}
              onChange={handleChange}
            />

  
            
            <select
            id="state"
            name="state"
            value={values.state}
            onChange={handleChange}
            required
            className={style.select}
            >
            <option value="" disabled>Seleccione el estado de la tarea</option>
            {stateTask.map((type) => (
                <option key={type.value} value={type.value}>
                {type.label}
                </option>
            ))}
            </select>

            <input 
            type="datetime-local"
            required 
            id="timeLimit"
            name="timeLimit"
            value={values.timeLimit}
            onChange={handleChange}
            />
  
            <div className={style.buttonContainer}>
                <button className="btn btn-success "  type="submit" >Aceptar</button>
            </div>
  
            
          </form>
        </div>
      </div>
    )
  };
