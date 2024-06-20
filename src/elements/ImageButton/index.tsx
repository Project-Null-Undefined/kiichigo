import Image from 'next/image';
import { type ReactElement, type ButtonHTMLAttributes, type CSSProperties } from 'react';
import styles from './index.module.scss';
import { RADIUS, type RadiusKey } from '@/consts/variables';

type Props = {
  src: string;
  radius: RadiusKey | 'circle';
  width: number;
  height: number;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

export default function ImageButton({ src, radius, width, height, style, ...props }: Props): ReactElement {
  const buttonStyle: CSSProperties = {
    width,
    height,
    borderRadius: radius === 'circle' ? 'calc(infinity * 1px)' : RADIUS[radius],
  };

  return (
    <button {...props} className={styles.button} style={{ ...style, ...buttonStyle }} type="button">
      <Image alt="button" height={height} src={src} width={width} />
    </button>
  );
}
