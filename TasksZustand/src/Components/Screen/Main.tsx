import { useState } from "react";
import { Header } from "../UI/Header/Header"
import { ListCards } from "../UI/ListCards/ListCards"
import style from "./Main.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateModal } from "../UI/Modals/CreateModal/CreateModal";
export const Main = () => {

  const [modalCreate, setModalCreate] = useState<boolean>(false);


  return (
    <>
      <div className={style.header}>
        <Header>
        </Header>
      </div>

      <div className={style.mainContainer}>

        <div className={style.containerButton}>
            <h1>
              Tareas
            </h1>
            <button onClick={()=>{setModalCreate(true)}} style={{fontSize:"22px"}} className="btn btn-success ">Crear tarea</button>
        </div>

        <ListCards></ListCards>

      </div>
      {modalCreate ? <CreateModal onClose={setModalCreate}></CreateModal> : null}
    </>
  )
}
