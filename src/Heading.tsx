import * as React from 'react';

export interface HeadingProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
}

export default function Heading({
  color,
  label = 'Heading',
  size = 'small',
}: HeadingProps) {
  const fontSize =
    size === 'small'
      ? '18px'
      : size === 'medium'
      ? '20px'
      : size === 'large'
      ? '30px'
      : '';
  return (
    <h1
      style={{
        fontSize,
        color,
      }}
    >
      {label}
    </h1>
  );
}
