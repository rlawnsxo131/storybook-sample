/** @jsx jsx */
/** @jsxRuntime classic */

import { jsx, css } from '@emotion/react';

interface ButtonProps {
  color: string;
}

function Button({ color }: ButtonProps) {
  return (
    <div>
      <button css={wrapper({ color })}>tt</button>
    </div>
  );
}

const wrapper = ({ color }: ButtonProps) => css`
  background: white;
  color: ${color};
`;

export default Button;
