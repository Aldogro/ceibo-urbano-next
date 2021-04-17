import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'

import MainLayout from '../../components/MainLayout'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Dialog from '../../components/Dialog'
import Backdrop from '@material-ui/core/Backdrop'
import LinearProgress from '@material-ui/core/LinearProgress'

import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import FindInPageIcon from '@material-ui/icons/FindInPage'

import app from '../../firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'

const ImagesPage = () => {
  const classes = useStyles()
  const [imagesMetadata, setImagesMetadata] = useState([])
  const [user, loading, error] = useAuthState(app.auth())
  const [selectedImage, setSelectedImage] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [backdropOpen, setBackdropOpen] = useState(false)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const { items } = await app.storage().ref().child('/images').listAll()
    const temp = []
    items.forEach(async item => {
      const metadata = await item.getMetadata()
      temp.push(metadata)
      setImagesMetadata([...temp])
    })
  }

  const viewImage = async (image) => {
    const url = await app.storage().ref().child(image.fullPath).getDownloadURL()
    setSelectedImage(url)
    setBackdropOpen(true)
  }

  const handleDelete = (fullPath) => {
    setDialogOpen(true)
    setSelectedImage(fullPath)
  }

  const deleteImage = async () => {
    try {
      const response = await app.storage().ref().child(selectedImage).delete()
      enqueueSnackbar('Se ha eliminado correctamente la imagen', { variant: 'success'})
      setSelectedImage('')
      setDialogOpen(false)
      getImages()
    }
    catch (error) { enqueueSnackbar('Ha ocurrido un error al intentar borrar la imagen', { variant: 'error'}) }
  }

  const setValue = () => {
    let sum = 0
    imagesMetadata.forEach(image => {
      sum += image.size
    })
    return { percentage: ((sum / 1024) * 100) / 5_368_709_120, gigabytes: sum / 1_073_741_824 }
  }

  return (
    <>
      <MainLayout>
        <Container maxWidth="lg" className={classes.root}>
          <Typography className={classes.title} variant="h4">
            Listado de imágenes
          </Typography>
          {
            user
            ? <>
                <Typography variant="body2">
                  ({imagesMetadata.length}) Imágenes - Usado {setValue().gigabytes.toFixed(4)}GB de 5GB - {setValue().percentage.toFixed(4)}%
                </Typography>
                <LinearProgress className={classes.progressLine} variant="determinate" value={setValue().percentage} />
                <Dialog
                  isOpen={dialogOpen}
                  handleConfirm={() => deleteImage()}
                  handleClose={() => setDialogOpen(false)}
                  question="¿Seguro querés borrar esta imagen?"
                />
                <Backdrop className={classes.backdrop} open={backdropOpen} onClick={() => {
                  setBackdropOpen(false)
                  setSelectedImage('')
                }}>
                  <div className={classes.backdropImage}>
                    {
                      backdropOpen
                      ? <img className={classes.backdropImageImg} src={selectedImage} />
                      : null
                    }
                  </div>
                </Backdrop>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.tableHead}>
                      <TableRow>
                        <TableCell className={classes.tableHeadItems}>Nombre</TableCell>
                        <TableCell className={classes.tableHeadItems} align="right">Tamaño</TableCell>
                        <TableCell className={classes.tableHeadItems}>Tipo</TableCell>
                        <TableCell className={classes.tableHeadItems}>Modificada</TableCell>
                        <TableCell className={classes.tableHeadItems} align="center">Acciones</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        imagesMetadata.map((image) => (
                          <TableRow key={image.fullPath}>
                            <TableCell component="th" scope="row" className={classes.fullPath}>
                              <span title={image.fullPath}>{image.fullPath}</span>
                            </TableCell>
                            <TableCell align="right">{(image.size / 1_000_000).toFixed(3)}Mb</TableCell>
                            <TableCell>{image.contentType}</TableCell>
                            <TableCell>{new Date(image.updated).toLocaleDateString()}</TableCell>
                            <TableCell align="center">
                              <IconButton onClick={() => viewImage(image)}>
                                <FindInPageIcon color="primary" />
                              </IconButton>
                              <IconButton onClick={() => handleDelete(image.fullPath)}>
                                <DeleteForeverIcon color="error" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            : null
          }
        </Container>
      </MainLayout>
    </>
  )
}

export default ImagesPage

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '70px',
    marginBottom: '90px',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  backdropImage: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
  },
  backdropImageImg: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '700px',
      objectFit: 'contain'
    }
  },
  closeBackdrop: {
    position: 'absolute',
    color: 'white',
    top: theme.spacing(3),
    right: theme.spacing(3),
  },
  progressLine: {
    marginBottom: '1rem',
  },
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    fontSize: '18px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '2rem',
      marginBottom: '1rem',
      fontSize: '24px',
    },
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main,
  },
  tableHeadItems: {
    color: '#FFFFFF',
  },
  fullPath: {
    maxWidth: 300,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
  }
}))