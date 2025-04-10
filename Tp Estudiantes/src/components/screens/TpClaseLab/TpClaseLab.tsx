import { useEffect, useState } from "react"
import { Curso } from "../../../types/TpLabCursos";
import style from "./TpClaseLab.module.css"
import { CardTpLab } from "../../ui/CardTpLab/CardTpLab";


export const TpClaseLab = () => {

    const [cursos,setCursos] = useState<Curso[]>([]);

    const fetchCursos = async ()=>{

        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/cursos`);


        const cursos:Curso[] = await response.json();


        console.log(cursos);

        setCursos(cursos);

    }

    useEffect(() => {
        
        return () => {
            fetchCursos();
        };
    }, []);


  return (
    <div className={style.mainDiv}>

        <h1>Cursos</h1>

        <div className={style.cardContainer}>

            {cursos.length > 0 ? (
                cursos.map((c) => (<CardTpLab curso={c}></CardTpLab>))) 

                : (    <p>No hay cursos disponibles</p>)}

        </div>


    </div>
  )
}
