import React from 'react';
import FreeTrialTitle from '../freeTrial/freeTrialTitle';
import { ARIES_LINK_TRYUS } from '../../constants/generals';
import './freeTrial.css';
import SectionLayout from '../layouts/sectionLayout';
import FreeTrialLinks from './freeTrialLinks';
function FreeTrial({
  hasLink = false,
  link = ARIES_LINK_TRYUS,
  isBigSized = false,
  ...props
}) {

  return (
    <SectionLayout {...props}>
      <FreeTrialTitle hasLink={hasLink} link={link} isBigSized={isBigSized} />
      <p className='mt-2 text-capitalize fs-xl fw-bold'>Risk free, no credit card required.</p>
      <FreeTrialLinks />
    </SectionLayout>
  );
}

export default FreeTrial;