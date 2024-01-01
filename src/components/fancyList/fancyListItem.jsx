import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import listStyleIcon from '../../assets/icons/list-style.png';
import './fancyList.css';

function FancyListItem({
  icon = listStyleIcon,
  text = "Fancy List Item"
}) {
  return (
    <ListGroup.Item className='text-start border-0'>
      <Image src={icon} roundedCircle className='list_item_image' alt='fire-icon'/>
      <span className='list_item_text'>{text}</span>
    </ListGroup.Item>
  );
}

export default FancyListItem;