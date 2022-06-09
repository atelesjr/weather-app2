import { createContext, ReactNode, useState } from "react";
import { typeCurrentWeather } from "services";

interface ProviderProps {
  children: ReactNode
}

interface positionType {
  lat: number, lon: number 
}

export interface ContextTypes {
  currentWeather: typeCurrentWeather
  setCurrentWeather: (state: typeCurrentWeather ) => void
  loading: boolean
  setLoading: (state: boolean) => void
  position: positionType
  setPosition: (state: positionType ) => void

}

const defaultValue = {
  currentWeather: {} as typeCurrentWeather,
  setCurrentWeather: () => {},
  loading: false,
  setLoading: () => {},
  position: {lat: 0, lon: 0 },
  setPosition: () => {}
}

export const Context = createContext<ContextTypes>(defaultValue)

export const Provider = ({ children }: ProviderProps ) => {
  const [ currentWeather, setCurrentWeather ] = useState(defaultValue.currentWeather)
  const [ loading, setLoading ] = useState(defaultValue.loading)
  const [ position, setPosition ] = useState(defaultValue.position)

  return( 
    <Context.Provider value={{ 
      currentWeather, setCurrentWeather,
      loading, setLoading,
      position, setPosition,
    }}>
      { children }
    </Context.Provider>
  )
}