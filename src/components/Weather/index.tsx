import * as S from './styles'

const Weather = () => {
  return (
    <S.Weather>
      <div className="current">
        26°C
      </div>
      <div className="others">
        <div className="description">
          <h4>Sunny</h4>
        </div>
        <div className="max">
          max: 27°C
        </div>
        <div className="min">
          min: 24°C
        </div>
      </div>

    </S.Weather>
  )
}

export default Weather