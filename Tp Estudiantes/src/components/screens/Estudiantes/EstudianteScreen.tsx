import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Curso, Estudiante } from "../../../types/TpLabCursos";
import { CardEstudiante } from "../../ui/CardEstudianteTpLab/CardEstudiante";
import style from "./Estudiante.module.css"


export const EstudianteScreen = () => {
    const {cursoID} = useParams();
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
    const [curso,setCurso] = useState<Curso>();
    
    const fetchInicio = async ()=>{

      const response = await await fetch(`${import.meta.env.VITE_BASE_URL}/cursos`);
      const responseAs:Curso[] = await response.json();

      if(cursoID){

        const curso: Curso[] = responseAs.filter(c => c.id !== parseInt(cursoID));

        setCurso(curso[0]);
        setEstudiantes(curso[0].estudiantes)
      }
  }

    useEffect(() => {
        
        return () => {
            fetchInicio();
        };
    }, []);

  return (
    <div className={style.mainDiv}>
      <h1>Estudiantes del curso {curso?.nombre}</h1>
      <div className={style.cardContainer}>

        {estudiantes.length > 0 ? (
                      estudiantes.map((e) => (<CardEstudiante estudiante={e}></CardEstudiante>))) 
      
                      : (    <p>No hay estudiantes disponibles</p>)}

      </div>



    </div>
  )
}
