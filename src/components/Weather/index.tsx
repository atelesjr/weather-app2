import * as S from './styles'

const Weather = () => {
  return (
    <S.Weather>
      <div className="image">
        x
      </div>
      <div className="data">
        <div className="current">
          26°C
        </div>
        <div className="others">
          <div className="description">
            <h4>Sunny</h4>
          </div>
          <div className="minmax">
            max: 27°C
          </div>
          <div className="minmax">
            min: 24°C
          </div>
        </div>
      </div>
      
      <div className="daylight">
        <div className="sunrise">
          <div className="image">
            x
          </div>
          <span>
            Sunrise: 06:40
          </span>
        </div>
        <div className="sunset">
          <div className="image">
            x
          </div>
          <span>
          Sunset: 17:30
          </span>
        </div>
      </div>


    </S.Weather>
  )
}

export default Weather