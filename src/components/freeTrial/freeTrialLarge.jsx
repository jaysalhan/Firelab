import React from 'react';
import FreeTrialLinks from './freeTrialLinks';
import './freeTrial.css';
import SectionLayout from '../layouts/sectionLayout';

function FreeTrialLarge({
  paragraph = 'Are you ready to take the first step in maximizing your company\'s full earning potential? Click the free trial button now. Don\'t hesitate to get started, your competition isn\'t'
}) {
  return (
    <SectionLayout>
      <p className='free_trial_paragraph mt-4 mx-auto'>{paragraph}</p>
      <FreeTrialLinks />
    </SectionLayout>
  );
}

export default FreeTrialLarge;