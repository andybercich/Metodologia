import { FC } from "react";
import { Estudiante } from "../../../types/TpLabCursos"
import style from "./CardEstudiante.module.css"

interface Props{
    estudiante: Estudiante;
}

export const CardEstudiante:FC<Props> = ({estudiante}) => {
  return (
    <div  className={style.cardDiv}>
        <h3>
           Nombre: {estudiante.nombre}
        </h3>
        <h3>
            Edad: {estudiante.edad}
        </h3>

    </div>
  )
}
