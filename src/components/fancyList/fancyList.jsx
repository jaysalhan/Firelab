import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import listStyleIcon from '../../assets/icons/list-style.png';
import './fancyList.css';
import FancyListItem from './fancyListItem';

function FancyList({
  title = "Fancy List",
  items = []
}) {
  return (
    <>
      <h2 className='fancy_title text-uppercase fw-bold'>{title}</h2>
      <ListGroup className='fancy_list list-group-flush'>
        {items.map((item, index) => (
          <FancyListItem 
            key={index}
            text={item}
          />
        ))}
      </ListGroup>
    </>
  );
}

export default FancyList;