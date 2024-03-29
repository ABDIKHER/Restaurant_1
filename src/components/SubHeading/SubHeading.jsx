import React from 'react';
import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{margin:'1.5rem 0 '}}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
