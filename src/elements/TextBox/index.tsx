import { type CSSProperties, type ReactElement } from 'react';
import { type Size } from '@/consts/size';

const TEXT_SIZE = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.25rem',
} as const;

type Props = {
  size?: Size;
  children: ReactElement;
  bold?: boolean;
};

export default function TextBox({ size = 'md', children, bold = false }: Props): ReactElement {
  const textStyle: CSSProperties = {
    fontSize: TEXT_SIZE[size],
    fontWeight: bold ? 'bold' : 'normal',
  };

  return <p style={textStyle}>{children}</p>;
}
