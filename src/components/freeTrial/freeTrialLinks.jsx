import React from 'react';
import { Button } from 'react-bootstrap';
import { ARIES_LINK_TRYUS, REQUEST_A_DEMO_LINK } from '../../constants/generals';
import './freeTrial.css';

function FreeTrialLinks({
  firstButtonText = 'Start your free trial now',
  secondButtonText = 'Request a demo',
  firstButtonLink = ARIES_LINK_TRYUS,
  secondButtonLink = REQUEST_A_DEMO_LINK
}) {
  return (
    <div className='free_trial_buttons mt-4 d-flex justify-content-center align-items-center'>
      <Button href={firstButtonLink} className='m-2 bg-highlight text-uppercase mt-2 text-sm fw-bold'>{firstButtonText}</Button>
      <div className='m-2 fw-bold mt-2'>OR</div>
      <Button href={secondButtonLink} className='m-2 bg-highlight text-uppercase mt-2 text-sm fw-bold'>{secondButtonText}</Button>
    </div>
  );
}

export default FreeTrialLinks;