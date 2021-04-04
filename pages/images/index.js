import React, { useEffect, useState } from 'react'
import AppAppBar from '../../modules/views/AppAppBar'

import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import app from '../../firebase/firebase.config'

const ImagesPage = () => {
  const [temps, setTemps] = useState([])

  useEffect(() => {
    getImages()
  }, [])

  const getImages = () => {
    const temp = []
    app.storage().ref().child('/images').listAll()
    .then(response => {
      response.items.forEach(item => {
        item.getDownloadURL().then(url => {
          console.log(item)
          const item = { ...item, url }
          temp.push(item)
          setTemps(temp)
        })
      })
    })
    setTemps(temp)
  }

  const deleteImage = (fullPath) => {
    app.storage().ref().child(fullPath).delete()
    .then(res => getImages())
  } 

  return (
    <>
      <AppAppBar />
      {
        temps.map(temp => (
          <div style={{ height: 100, display: 'inline-block', position: 'relative' }}>
            <IconButton size="small" style={{ position: 'absolute', top: 0, right: 0, color: '#FF0000'}} onClick={() => deleteImage(temp._delegate.fullPath)}>
              <DeleteForeverIcon />
            </IconButton>
            <img key={temp.url} src={temp.url} style={{ height: 100 }} />
          </div>
        ))
      }
    </>
  )
}

export default ImagesPage