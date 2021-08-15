import styled from 'styled-components'

export const PhotoPicker = styled.div`
  background-color: gold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 99;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.356);
  margin-bottom: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
`

export const PhotoPickerInputWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const PhotoPickerInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
`

export const PhotoPickerIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const PhotoPickerImagePreviewWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
`

export const PhotoPickerImagePreviewBox = styled.div`
  width: 100%;
  height: 100%;

  img {
    object-fit: fill !important;
    width: 100%;
    height: 100%;
  }
`

export const PhotoPickerDeleteIcon = styled.div`
  max-width: 100px;
  max-height: 100px;
  min-width: 50px;
  min-height: 50px;
  position: absolute;
  top: -15px;
  right: -15px;
  z-index: 999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
