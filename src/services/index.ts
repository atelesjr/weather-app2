import axios from "axios"


interface weatherType {
  id: number
  description: string
  icon: string
}

export interface typeCurrentWeather {
  weather : weatherType []
  main: {
    temp: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  wind:{
    speed: number
    deg: number
  }

}

const apiCurentWeather = 'https://api.openweathermap.org/data/2.5/weather'

export const getCurrentWeather = async (lat:number, lon:number): Promise<typeCurrentWeather> => {
  const data = await axios.get(
    `${apiCurentWeather}?lat=${lat}&lon=${lon}&lagn=pt_br&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  )
  .then( res => res.data)
  .catch( error => console.log(error))
 
  return data
}