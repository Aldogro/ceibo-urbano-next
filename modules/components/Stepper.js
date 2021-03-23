import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

function getSteps() {
  return [
    'Seleccioná los productos o promociones',
    'Seleccioná las cantidades',
    'Hacé el pedido a través de whatsapp con un solo click',
    'Pagá cuando recibís tu pedido'
  ];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={steps.length} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <div className={classes.stepText}>
                {label}
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  stepText: {
    fontSize: '20px',
    marginLeft: theme.spacing(2),
  }
}));