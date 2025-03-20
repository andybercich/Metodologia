export const FormatLocalDate = (date: Date) => {
    const offset = date.getTimezoneOffset(); // Offset en minutos
    const localDate = new Date(date.getTime() - offset * 60000); // Ajusta a la hora local
    return localDate.toISOString().slice(0, 16); // Recorta segundos y milisegundos
  };