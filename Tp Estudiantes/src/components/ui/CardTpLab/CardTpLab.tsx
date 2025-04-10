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
        <h1>
            {curso.id}
        </h1>
        <h1>
            {curso.nombre}
        </h1>
    </div>
  )
}
