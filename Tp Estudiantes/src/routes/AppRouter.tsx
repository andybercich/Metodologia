import { Navigate, Route, Routes } from "react-router-dom";
import { EstudianteScreen } from "../components/screens/Estudiantes/EstudianteScreen";
import { TpClaseLab } from "../components/screens/TpClaseLab/TpClaseLab";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/*<Route path="/" element={<Navigate to="/vistaBacklog" replace />} />*/}
        <Route path="/" element={<Navigate to="/cursos" replace />} />
        <Route path="/cursos" element={<TpClaseLab/>}></Route>
        <Route path="/cursos/estudiantes/:cursoID" element={<EstudianteScreen/>}></Route>


      </Routes>
    </>
  );
};

