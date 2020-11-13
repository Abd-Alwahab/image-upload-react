import React, { useEffect } from 'react'
import './styles.module.css'
import { FaTrash, FaArrowCircleUp } from 'react-icons/fa'

function ImageUpload({
  imageSrc,
  setImageSrc,
  handleImageSelect,
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
        <div
          className='create-book-image-preview-icon-container _2B-m5'
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'tomato',
            position: 'absolute',
            top: 0,
            right: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: 99999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaTrash
            size={30}
            color='#fff'
            onClick={() => {
              setImageSrc('')
            }}
            className='create-book-image-preview-icon'
          />
        </div>
      ) : null}
      <div className='create-book-photo-picker _FCdzt' style={style}>
        {imageSrc ? (
          <div
            className='create-book-image-preview-container _GQrmn'
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 99999999
            }}
          >
            <div
              className='create-book-image-preview-image-box _2zJnR'
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src={imageSrc}
                alt='pick image'
                className='image _2hdkJ'
                style={{
                  width: '100%',
                  objectFit: 'fill',
                  height: '100%'
                }}
              />
            </div>
          </div>
        ) : (
          <FaArrowCircleUp
            size={70}
            color='#fff'
            className='create-book-photo-icon _1pmC5'
          />
        )}
        <div
          className='create-book-image-input-container _1n017'
          style={{
            overflow: 'hidden',
            width: '100%',
            height: '100%'
          }}
        >
          <input
            type='file'
            name='photo'
            className='create-book-photo-input _2SsMH'
            placeholder='select the book photo'
            style={{
              opacity: 0,
              width: '100%',
              height: '100%'
            }}
            accept='image/*'
            onChange={handleImageSelect}
            onClick={(event) => {
              event.target.value = null
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageUpload
