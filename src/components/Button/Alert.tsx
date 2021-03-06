import React from 'react';

export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
};

export interface AlertProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  kind: 'info' | 'positive' | 'negative' | 'warning';
}

export const Alert: React.FC<AlertProps> = ({ children, kind, ...rest }) => (
  <div
    style={{
      padding: 20,
      background: kinds[kind] || 'white',
      borderRadius: 3,
      color: 'white'
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </div>
);
