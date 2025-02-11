import { DateDataType } from "../types/dateData";

const today = new Date();
const localToday = today.toLocaleDateString("en-CA");

export const dates: DateDataType[] = [
  {
    solicitud_id: 1,
    fechaInicio: "2025-02-12",
    fechaFinal: "2025-02-14",
    nombre_tipo: "vacaciones",
    color: "#facc15",
  },
  {
    solicitud_id: 2,
    fechaInicio: "2025-02-06",
    fechaFinal: "2025-02-06",
    nombre_tipo: "sinGoce",
    color: "#fb923c",
  },
  
];
