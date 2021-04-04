import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'

import Typography from '@material-ui/core/Typography'

export default function VerticalLinearStepper() {
  const classes = useStyles()
  const steps = [
    {
      title: 'Elegí',
      text: 'Seleccioná los productos o promociones',
      connector: true,
    },
    {
      title: 'Agregá',
      text: 'Seleccioná las cantidades de los productos o promociones',
      icon: 'FastFood',
      connector: true,
    },
    {
      title: 'Seleccioná',
      text: 'Elegí el medio de pago',
      connector: true,
    },
    {
      title: 'Pedí',
      text: 'Hacé el pedido a través de whatsapp con un solo click',
      connector: true,
    },
    
    {
      title: 'Recibí',
      text: '¡Te lo llevamos hasta tu casa!',
      connector: false,
    },
  ]

  return (
    <div className={classes.root}>
      <Timeline align="alternate">
        {steps.map((step, index) => (
          <TimelineItem key={step.title + index}>
            <TimelineOppositeContent>
              <Typography className={classes.title} component="h4">{step.title}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" className={classes.dot}>{index + 1}</TimelineDot>
              {step.connector ? <TimelineConnector className={classes.connector} /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography className={classes.text} color="textSecondary">{step.text}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maringLeft: '-100px',
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  connector: {
    backgroundColor: theme.palette.primary.main,
  },
  dot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30px',
    width: '30px',
  },
  title: {
    fontSize: '12px',
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  text: {
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
}));