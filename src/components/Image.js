import React from 'react';
import cn from 'classnames';

const Image = ({ size }) => {
  return (
    <img
      className={cn('w-full', `h-${size}`, 'object-cover')}
      src="https://picsum.photos/500"
      alt=""
    />
  );
};

export default Image;
