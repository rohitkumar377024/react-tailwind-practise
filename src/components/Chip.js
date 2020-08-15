import React from 'react';
import cn from 'classnames';

const Chip = ({ text, backgroundColor, textColor, marginLeft }) => {
  return (
    <p
      className={cn(
        'inline-block',
        'px-3',
        'py-1',
        'font-bold',
        'text-xs',
        'uppercase',
        'tracking-wider',
        'rounded-full',
        `bg-${backgroundColor}`,
        `text-${textColor}`,
        `ml-${marginLeft}`
      )}
    >
      {text}
    </p>
  );
};

export default Chip;
