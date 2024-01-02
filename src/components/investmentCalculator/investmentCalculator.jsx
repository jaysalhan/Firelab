import React, {useRef, useState} from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import './investmentCalculator.css';

import {MONTHLY_LABOR_DAYS} from '../../constants/generals';

function InvestmentCalculator({
  steps = []
}) {
  const [btnText, setBtnText] = useState('Next');
  const [done, setDone] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [results, setResult] = useState(0);

  const data = useRef(() => {
    const data = {}
    steps.forEach((step) => {
      data[step.id] = null;
    })
    return data;
  });

  const calculateResults = () => {
    const dayliJobs = data.current.techs * data.current.jobs
    const monthyJobs = dayliJobs * MONTHLY_LABOR_DAYS
    const monthlyLaborMinutes = monthyJobs * data.current.time
    const monthlyLaborHours = monthlyLaborMinutes / 60
    const monthlyLaborCost = monthlyLaborHours * data.current.wage
    return Math.round(monthlyLaborCost)
      .toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  const handleInputChange = (inputElement, id) => {
    data.current = { ...data.current, [id]: parseInt(inputElement.value) }
  }

  const handleNextStep = () => {  
    const thisStep = currentStep + 1
    const nextInput = document.getElementById(thisStep)
    console.log(nextInput)
    setCurrentStep( thisStep );
    if (thisStep === steps.length) {
      setBtnText('Calculate');
    }
    if(thisStep > steps.length) {
      setDone(true);
      const amount = calculateResults();
      setResult( amount );
    }
  }

  const handleRestart = () => {
    setBtnText('Next');
    setDone(false);
    setCurrentStep(1);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleNextStep()
    }
  }

  return (
    <div className='calculator_container text-start p-5 mx-5 rounded'>
      <h3 className='text-uppercase fw-bold'>Return on investment calculator</h3>
      { !done && (
          <>
            {steps.map((step, index) => {
              index++;
              return (
                <div key={index} className={ index === currentStep? 'd-block' : 'd-none' }>
                  <p>Step: {index}</p>
                  <div className='' key={index}>
                    <p className=''>{step.title}</p>
                    <input 
                      id={index}
                      type='number' className='form-control' 
                      onChange={ ({target})=> { handleInputChange(target, step.id) } } 
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
              )
            })}
            <div className='mt-4 d-flex justify-content-end'>
              <button className='btn_secondary_color'
                onClick={handleNextStep}
              >
                  {btnText}
              </button>
            </div>
          </>
      )}
      { done && (
          <>
            <p className='mt-4'>This is the minimum amount you'll save each month</p>
            <p className='fw-bold' style={{ fontSize: '24px' }}>{results}</p>
            <div className='restart_button d-flex justify-content-center align-items-center bg-black rounded-circle'
              onClick={handleRestart}
            >
              <i className="fa fa-2x fa-rotate-left fa-flip-horizontal fa-fw" style={ {fontWeight: 100} } ></i>
            </div>
          </>
      )}
    </div>
  );
}

export default InvestmentCalculator;