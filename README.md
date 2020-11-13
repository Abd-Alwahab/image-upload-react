# image-upload-react

> react image picker

[![NPM](https://img.shields.io/npm/v/image-upload-react.svg)](https://www.npmjs.com/package/image-upload-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

![Alt text](https://i.ibb.co/D79mp0Z/Screen-Shot-2020-11-11-at-7-33-31-AM.png 'Image Upload')
![Alt text](https://i.ibb.co/JQR2GDk/Screen-Shot-2020-11-11-at-7-33-44-AM.png 'Image Replace')

## Install

```bash
npm install --save image-upload-react
```

## Usage

```jsx
import React, { useState } from 'react'
import ImageUpload from 'image-upload-react'
//important for getting nice style.
import 'image-upload-react/dist/index.css'

function App() {
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
```

## Docs

| Property          | Description                                                                                                 | Required |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | -------- |
| handleImageSelect | function that will get fired when the user pick an image and we will update the state with the piacked file | true     |
| imageSrc          | peace of state to keep track of the slected file                                                            | true     |
| setImageSrc       | function that will update the value in the state                                                            | true     |
| style             | style object to style the parent div for the ImageUpload component                                          | false    |

## License

MIT © [Abd-Alwahab](https://github.com/Abd-Alwahab)
