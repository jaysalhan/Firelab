import React from 'react';
import { ARIES_LINK_TRYUS } from '../../constants/generals';

function FreeTrialTitle({
  hasLink = false,
  link = ARIES_LINK_TRYUS,
  isBigSized = false,
}) {
  return (
    <h2 className={"fw-bold " + (isBigSized? "display-4": "")}>
      Start Your 
      {hasLink ? (
        <a href={link} className='highlight link'> Free Trial </a>
      ) : (
        <span className='highlight'> Free Trial </span>
      )}{' '}
      Today <br /> <small style={{fontSize: 22}}>See The Difference By Using One Of The Best Fire Inspection Softwares On The Market.</small>
    </h2>
  );
}

export default FreeTrialTitle;