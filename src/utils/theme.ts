import { css } from 'styled-components';

// Theme
export const Themes = {
  primary: {
    color: '#FFFFFF',
    backgroundColor: '#2D9CDB',
  },
  secondary: {
    color: '#FFFFFF',
    backgroundColor: '#27AE60',
  },
  inherit: {
    color: '#FFFFFF',
    backgroundColor: '#333333',
  },
  white: {
    color: '#333333',
    backgroundColor: '#FFFFFF',
  },
  orange: {
    color: '#FFFFFF',
    backgroundColor: '#F2994A',
  },
  yellow: {
    color: '#FFFFFF',
    backgroundColor: '#F2C94C',
  },
};

// Size
export const Sizes = {
  button: {
    small: '128px',
    medium: '160px',
    large: '192px',
  },
};

// Mixin
export const ButtonStyle = css`
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  appearance: none;
`;

// Const
export const HeaderHeight = '80px';
export const FooterHeight = '144px';