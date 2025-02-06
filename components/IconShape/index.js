import { React, useEffect, useState } from 'react';

import Arrow from '../../public/images/IconShapes/arrow.svg';
import Circle from '../../public/images/IconShapes/circle.svg';
import Frame from '../../public/images/IconShapes/frame.svg';
import Gear from '../../public/images/IconShapes/gear.svg';
import Kiss from '../../public/images/IconShapes/kiss.svg';
import Moon from '../../public/images/IconShapes/moon.svg';
import Pillow from '../../public/images/IconShapes/pillow.svg';
import Pizza from '../../public/images/IconShapes/pizza.svg';
import Potato from '../../public/images/IconShapes/potato.svg';
import Rect from '../../public/images/IconShapes/rect.svg';
import Star from '../../public/images/IconShapes/star.svg';
import Timer from '../../public/images/IconShapes/timer.svg';
import classNames from 'classnames';

const IconShape = ({ children, className, shape, onClick, fixed }) => {
  const shapes = [
    'arrow',
    'circle',
    'frame',
    'gear',
    'kiss',
    'moon',
    'pillow',
    'pizza',
    'potato',
    'rect',
    'star',
    'timer',
  ];

  const [randomShape, setRandomShape] = useState(null);
  const [mounted, setMounted] = useState(false);
  let toDraw;

  useEffect(() => {
    if (shape) {
      setRandomShape(shape);
    } else if ((randomShape == null && fixed) || !fixed) {
      setRandomShape(shapes[Math.floor(Math.random() * shapes.length)]);
    }
    setMounted(true);
  }, []);

  if (fixed || shape != null) {
    toDraw = randomShape;
  } else if (mounted) {
    toDraw = shapes[Math.floor(Math.random() * shapes.length)];
  }

  switch (toDraw) {
    case 'arrow':
      return (
        <Arrow className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Arrow>
      );
    case 'circle':
      return (
        <Circle className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Circle>
      );
    case 'frame':
      return (
        <Frame className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Frame>
      );
    case 'gear':
      return (
        <Gear className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Gear>
      );
    case 'kiss':
      return (
        <Kiss className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Kiss>
      );
    case 'moon':
      return (
        <Moon className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Moon>
      );
    case 'pillow':
      return (
        <Pillow className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Pillow>
      );
    case 'pizza':
      return (
        <Pizza className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Pizza>
      );
    case 'potato':
      return (
        <Potato className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Potato>
      );
    case 'rect':
      return (
        <Rect className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Rect>
      );
    case 'star':
      return (
        <Star className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Star>
      );
    case 'timer':
      return (
        <Timer className={classNames(className)} onClick={onClick ? () => onClick() : null}>
          {children}
        </Timer>
      );
    default:
      return null;
  }
};

export default IconShape;
