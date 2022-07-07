//De los monitores se desea almacenar: nombres, apellidos, programa académico,
// semestre, cédula, e información de contacto.

import { typeMonitores } from "../types/types";

const initialState = {
  monitores: [],
};

export const monitoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeMonitores.agregar:
      return {
        monitores: [...state.monitores, action.payload],
      };

    case typeMonitores.buscar:
      return {
        monitores: action.payload,
      };

    case typeMonitores.listar:
      return {
        monitores: [...action.payload],
      };

      case typeMonitores.delete:
            return {
                monitores: state.monitores.filter(monitor => monitor.cedula !== action.payload)
            }

    case typeMonitores.editar:
      return {
        ...state,
      };

      default:
       return state
  }
};
