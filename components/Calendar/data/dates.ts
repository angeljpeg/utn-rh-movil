const colorInterval = "#16a34a";
const today = new Date();
const localToday = today.toLocaleDateString("en-CA");

export const dates = {
  "2025-02-05": { marked: true, dotColor: "#50cebb" },
  "2025-02-03": { marked: true, dotColor: "#50cebb" },
  // Primer día del intervalo (redondeado a la izquierda)
  "2025-02-21": {
    startingDay: true,
    customStyles: {
      container: {
        backgroundColor: colorInterval,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        flex: 1,
        width: "100%",
        /* marginRight: -5, */ // Solapamiento con el siguiente día
      },
      text: { color: "white" },
    },
  },

  // Días intermedios (rectángulos)
  "2025-02-22": {
    customStyles: {
      container: {
        backgroundColor: colorInterval,
        borderRadius: 0, // Sin bordes redondeados
        marginRight: -5, // Solapamiento con el siguiente día
        marginLeft: -5, // Solapamiento con el anterior
        flex: 1,
        width: "100%",
      },
      text: { color: "white" },
    },
  },
  "2025-02-23": {
    customStyles: {
      container: {
        backgroundColor: colorInterval,
        borderRadius: 0,
        marginRight: -5,
        marginLeft: -5,
        flex: 1,
        width: "100%",
      },
      text: { color: "white" },
    },
  },
  "2025-02-24": {
    customStyles: {
      container: {
        backgroundColor: colorInterval,
        borderRadius: 0,
        marginRight: -5,
        marginLeft: -5,
        flex: 1,
        width: "100%",
      },
      text: { color: "white" },
    },
  },

  // Último día del intervalo (redondeado a la derecha)
  "2025-02-25": {
    endingDay: true,
    customStyles: {
      container: {
        backgroundColor: colorInterval,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        flex: 1,
        width: "100%",
        /* marginLeft: -5, */ // Solapamiento con el anterior
      },
      text: { color: "white" },
    },
  },
  [localToday]: {
    customStyles: {
      container: {
        backgroundColor: "#737373", // Amarillo dorado (personaliza el color)
        borderRadius: 20, // Hace que sea un círculo
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        color: "#fff", // Texto negro para contraste
        fontWeight: "bold",
      },
    },
  },
};
