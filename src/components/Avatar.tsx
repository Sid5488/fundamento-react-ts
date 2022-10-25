import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

const Avatar = ({ hasBorder = true, alt, ...rest }: IAvatarProps): JSX.Element => {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      alt={alt ? alt : "Avatar from user"}
      {...rest}
    />
  );
};

export { Avatar };
