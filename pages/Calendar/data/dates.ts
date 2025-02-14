import { DateDataType } from "../types/dateData";

const today = new Date();
const localToday = today.toLocaleDateString("en-CA");

export const dates: DateDataType[] = [
  {
    solicitud_id: 1,
    fechaInicio: "2025-02-10",
    fechaFinal: "2025-02-14",
    nombre_tipo: "Vacaciones",
    color: "#facc15",
    status: "APROBADO"
  },
  {
    solicitud_id: 2,
    fechaInicio: "2025-02-06",
    fechaFinal: "2025-02-06",
    nombre_tipo: "Sin goce de sueldo",
    color: "#fb923c",
    status: "APROBADO"
  },
  {
    solicitud_id: 3,
    fechaInicio: "2025-02-19",
    fechaFinal: "2025-02-21",
    nombre_tipo: "Sin goce de sueldo",
    color: "#fb923c",
    status: "APROBADO"
  },
  {
    solicitud_id: 4,
    fechaInicio: "2025-03-06",
    fechaFinal: "2025-03-07",
    nombre_tipo: "Sin goce de sueldo",
    color: "#fb923c",
    status: "APROBADO"
  },
  {
    solicitud_id: 5,
    fechaInicio: "2025-03-11",
    fechaFinal: "2025-03-13",
    nombre_tipo: "Sin goce de sueldo",
    color: "#fb923c",
    status: "PENDIENTE"
  },
  {
    solicitud_id: 6,
    fechaInicio: "2025-03-18",
    fechaFinal: "2025-03-19",
    nombre_tipo: "Sin goce de sueldo",
    color: "#fb923c",
    status: "PENDIENTE"
  },
];
