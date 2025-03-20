import Swal from "sweetalert2";

export const badContest = (message?: string) => {
  Swal.fire({
    icon: "error",
    title: "Error en el servidor",
    text:
      message ||
      "El servidor no respondió correctamente. Intenta nuevamente más tarde.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#d33",
  });
};

export const godContest = (message?: string) => {
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: message || "La empresa ha sido modificada correctamente.",
    showCloseButton: true,
    confirmButtonText: "Aceptar",
  });
};


export const confirmAlert = async (
  title: string = "¿Estás seguro?",
  text: string = "Esta acción no se puede deshacer.",
  confirmButtonText: string = "Sí, continuar",
  cancelButtonText: string = "Cancelar"
): Promise<boolean> => {
  const result = await Swal.fire({
    icon: "warning",
    title,
    text,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  });

  return result.isConfirmed; };
