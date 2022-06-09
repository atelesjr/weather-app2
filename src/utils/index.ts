
type scaleType = 'FC' | 'CF' | 'KC' | 'KF'

export const weatherConversion =(temp:number, scale: scaleType):number => {

  const converstion = {
    'FC': (temp: number) => (temp - 32) * 5 / 9,
    'CF': (temp: number) => temp * 9 / 5 + 32,
    'KC': (temp: number) => temp - 273.15,
    'KF': (temp: number) => (temp - 273.15) * 9/5 + 32,
  }
  
  const result = Math.trunc(converstion[scale](temp))

  return  result || 0
}

export interface getLocationType {
  lat: number, lon: number
}

// { lat: number, lon: number} | undefined

export const getLocation =  async ()  => {

  const getPosition = async (
    options: PositionOptions = {
      maximumAge: 10000,
      timeout: 5000,
      enableHighAccuracy:true
    }
  ): Promise<any> => {
    return await new Promise((resolve, reject) => 
      navigator.geolocation.getCurrentPosition(
        resolve, reject, options
      )
    )
  }

  const data = getPosition()
  .then( pos => {
    return {
      lat:  pos.coords.latitude,
      lon: pos.coords.longitude
    }
  }).catch(err => err)


  return data

};
    
