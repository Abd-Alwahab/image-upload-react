import React, { useState } from 'react'

import ImageUpload from 'image-upload-react'
import 'image-upload-react/dist/index.css'

const App = () => {
  const [imageSrc, setImageSrc] = useState()

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <ImageUpload
      handleImageSelect={handleImageSelect}
      imageSrc={imageSrc}
      setImageSrc={setImageSrc}
      style={{
        width: 700,
        height: 500,
        background: 'gold'
      }}
    />
  )
}

export default App
