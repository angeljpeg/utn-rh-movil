export type DateDataType = {
  solicitud_id: number
  fechaInicio: string
  fechaFinal: string
  nombre_tipo: string
  color: string
  status: string
};

export type stateType = "disabled" | "today" | ""

export type onMonthChangeType = (year: number, month: number) => void