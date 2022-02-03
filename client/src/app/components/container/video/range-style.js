import styled from 'styled-components'

//Размер прогресс бара
const height = '10px'
const thumbSize = 36
const trackSize = '16px'

//Цвета
const gray = 'gray'
const white = 'white'

//Цвета прогресс бара
const upperColor = gray
const lowerColor = white
const thumbColor = gray
const thumbColorHover = gray

//Заполнение полосок прогресс бара
const upperLine = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackSize} no-repeat transparent`
const lowerLine = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackSize} no-repeat transparent`

//Тень для линии
const makeLineShadow = (color, size) => {
  let index = 18
  let shadow = `${index}px 0 0 ${size} ${color}`

  for (; index < 706; index++) {
    shadow = `${shadow}, ${index}px 0 0 ${size} ${color}`
  }

  return shadow
}

const Range = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbColorHover};
    }
    &::-moz-range-thumb {
      background-color: ${thumbColorHover};
    }
    &::-ms-thumb {
      background-color: ${thumbColorHover};
    }
  }

  &::-webkit-slider-runnable-track {
    height: ${height};
    background: ${lowerLine};
    width: 100%;
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLineShadow(upperColor, '-10px')};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperLine};
  }

  &::-moz-range-progress {
    background: ${lowerLine};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbSize};
    width: ${thumbSize};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerLine};
  }

  &::-ms-fill-upper {
    background: ${upperLine};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbSize};
    width: ${thumbSize};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }
`

export default Range
