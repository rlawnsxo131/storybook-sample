import * as React from 'react';
import { css } from '@emotion/react';

interface InputProps {}

function Input(props: InputProps) {
  return (
    <div css={wrapper}>
      input
      <input />
    </div>
  );
}

const wrapper = css`
  color: red;
`;

export default Input;
