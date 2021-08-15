import React, { useEffect } from 'react'
import { FaTrash, FaArrowCircleUp } from 'react-icons/fa'

import {
  PhotoPicker,
  PhotoPickerDeleteIcon,
  PhotoPickerIcon,
  PhotoPickerImagePreviewBox,
  PhotoPickerImagePreviewWrapper,
  PhotoPickerInput,
  PhotoPickerInputWrapper
} from './styles'

function ImageUpload({
  imageSrc,
  setImageSrc,
  handleImageSelect,
  deleteIcon,
  defaultDeleteIconSize,
  defaultDeleteIconColor,
  style = {
    backgroundColor: 'gold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    /* overflow: hidden; */
    position: 'relative',
    zIndex: '99',
    boxShadow: '0 4px 3px rgba(0, 0, 0, 0.356)',
    marginBottom: '0.5rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '3rem'
  }
}) {
  useEffect(() => {
    if (!imageSrc === null) {
      throw new Error('please provide an imageSrc property!')
    } else if (!setImageSrc) {
      throw new Error('please provide an setImageSrc property!')
    } else if (!handleImageSelect) {
      throw new Error('please provide an handleImageSelect property!')
    }
  }, [])
  return (
    <div
      style={{
        width: style.width || 500,
        height: style.height || 300,
        position: 'relative',
        borderRadius: style.borderRadius
      }}
    >
      {imageSrc ? (
        <PhotoPickerDeleteIcon
          onClick={() => {
            setImageSrc('')
          }}
        >
          {deleteIcon || (
            <FaTrash
              size={defaultDeleteIconSize || 30}
              color={defaultDeleteIconColor || '#fff'}
            />
          )}
        </PhotoPickerDeleteIcon>
      ) : null}
      <PhotoPicker style={style}>
        {imageSrc ? (
          <PhotoPickerImagePreviewWrapper>
            <PhotoPickerImagePreviewBox>
              <img src={imageSrc} alt='pick image' />
            </PhotoPickerImagePreviewBox>
          </PhotoPickerImagePreviewWrapper>
        ) : (
          <PhotoPickerIcon>
            <FaArrowCircleUp size={70} color='#fff' />
          </PhotoPickerIcon>
        )}
        <PhotoPickerInputWrapper>
          <PhotoPickerInput
            type='file'
            name='photo'
            placeholder='select the book photo'
            accept='image/*'
            onChange={handleImageSelect}
            onClick={(event) => {
              event.target.value = null
            }}
          />
        </PhotoPickerInputWrapper>
      </PhotoPicker>
    </div>
  )
}

export default ImageUpload
