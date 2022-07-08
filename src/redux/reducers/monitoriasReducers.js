import { typeMonitorias } from "../types/types";


const initialState = {
  monitorias: [],
};

export const monitoriasReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeMonitorias.agregar:
      return {
        monitorias: [...state.monitorias, action.payload],
      };

    case typeMonitorias.buscar:
      return {
        monitorias: action.payload,
      };

    case typeMonitorias.listar:
      return {
        monitorias: [...action.payload],
      };

      case typeMonitorias.delete:
            return {
                monitorias: state.monitorias.filter(monitor => monitor.cedula !== action.payload)
            }

    case typeMonitorias.editar:
      return {
        ...state,
      };

      default:
       return state
  }
};