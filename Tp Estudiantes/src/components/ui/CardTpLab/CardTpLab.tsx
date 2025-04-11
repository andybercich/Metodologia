import { FC } from "react"
import { Curso } from "../../../types/TpLabCursos"
import style from "./CardTpLab.module.css"
import { useNavigate } from "react-router-dom"

interface Props{
    curso: Curso
}

export const CardTpLab:FC<Props> = ({curso}) => {

    const navigate = useNavigate();

    const clickCard = ()=>{

        navigate(`/cursos/estudiantes/${curso.id}`)

    }
    

  return (
    <div className={style.cardDiv} onClick={()=>{clickCard()}}>
        <h3>
            {curso.id}
        </h3>
        <h3>
            {curso.nombre}
        </h3>
        <h3>
            Cantidad alumnos:{curso.estudiantes.length}
        </h3>
    </div>
  )
}
