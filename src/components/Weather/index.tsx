/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import * as S from './styles'
//images
import Humidity from 'assets/svg/humidity.svg'
import Wind from 'assets/svg/wind.svg'
import Direction from 'assets/svg/direction.svg'
//context
import { Context } from 'context'
// services
import { getCurrentWeather } from 'services'
// utils
import { getLocation, weatherConversion }from 'utils'

const Weather = () => {

  const { 
    currentWeather, setCurrentWeather, 
    setLoading ,
    position, setPosition
  } = useContext(Context)
  const [ weatherDescription, setWeatherDescription ] = useState({ description: '', icon: ''})
  
  useLayoutEffect(() => {
    
    getLocation()
    .then( res => setPosition({ lat: res?.lat, lon: res?.lon }) )
    .catch( err => console.log('err', err))

  }, [])


  
  useEffect(() => {
    setLoading(true)
    const getWeather = async (lat:number, long:number) => {
      const data = await getCurrentWeather(lat, long)
      data && setCurrentWeather(data)
    }

    getWeather(position?.lat, position?.lat)

    setTimeout(() => {
      setLoading(false)
    }, 1500);
   
 
  }, [position, setCurrentWeather])

  useEffect(() => {
    currentWeather.weather && (
      setWeatherDescription( { 
        description: currentWeather.weather[0].description,
        icon: currentWeather.weather[0].icon
      } )
    )

  }, [currentWeather])
  
  const getIcon = (icon:string) => <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="current temperature" />

  console.log(currentWeather)



  return (
    <S.Weather deg={currentWeather?.wind?.deg}>
      <div className="image">
        { getIcon(weatherDescription.icon) }
      </div>
      <div className="data">
        <div className="current">
          {
            
           `${ weatherConversion(currentWeather?.main?.temp , 'KC')}°C`
          }
        </div>
        <div className="others">
          <div className="description">
            <h4>{ weatherDescription.description }
            </h4>
          </div>
          <div className="minmax">
            {`
              max: ${ weatherConversion(currentWeather?.main?.temp_max , 'KC')}°C
            `}
          </div>
          <div className="minmax">
            {`
              min: ${ weatherConversion(currentWeather?.main?.temp_min , 'KC')}°C
            `}
          </div>
        </div>
      </div>
      
      <div className="air">
        <div className="humidity">
          <div className="image-humidity">
            <img src={Humidity} alt="humidity icon" />
          </div>
          <span>
            Humidity: { currentWeather?.main?.humidity }
          </span>
        </div>
        <div className="wind">
          <div className="image-wind">
            <img src={Wind} alt="wind icon" />
          </div>
          <div className='speed'>
            <span>Wind: { currentWeather?.wind?.speed }</span>
            <img src={Direction} alt="direction icon"  className='direction'/>
          </div>

        </div>
      </div>


    </S.Weather>
  )
}

export default Weather