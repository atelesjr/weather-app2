import { createContext, ReactNode, useState } from "react";
import { typeCurrentWeather } from "services";

interface ProviderProps {
  children: ReactNode
}

export interface ContextTypes {
  currentWeather: typeCurrentWeather
  setCurrentWeather: (state: typeCurrentWeather ) => void
  loading: boolean
  setLoading: (state: boolean) => void

}

const defaultValue = {
  currentWeather: {} as typeCurrentWeather,
  setCurrentWeather: () => {},
  loading: false,
  setLoading: () => {}
}

export const Context = createContext<ContextTypes>(defaultValue)

export const Provider = ({ children }: ProviderProps ) => {
  const [ currentWeather, setCurrentWeather ] = useState(defaultValue.currentWeather)
  const [ loading, setLoading ] = useState(defaultValue.loading)

  return( 
    <Context.Provider value={{ 
      currentWeather,
      setCurrentWeather,
      loading,
      setLoading
    }}>
      { children }
    </Context.Provider>
  )
}