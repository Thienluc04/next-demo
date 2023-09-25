import * as React from 'react';

export interface LightProps {
  // Some description
  variant?: 'green' | 'yellow' | 'red';
}

/* Some comment about my Light component */

export default function Light({ variant = 'green' }: LightProps) {
  return (
    <div
      style={{
        background: variant,
        borderRadius: '50%',
        width: '50px',
        height: '50px',
      }}
    ></div>
  );
}
