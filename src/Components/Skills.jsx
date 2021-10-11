import React from 'react';
import './Skills.css';

export const Skills = ({cStyle,text}) => {
    return (
      <div>
        <div className='percentage'>
          <div className={cStyle}>
            <div>{text}</div>
          </div>
        </div>
      </div>
    );
}
