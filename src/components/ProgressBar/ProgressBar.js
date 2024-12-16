/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Label = styled.label`
  font-size: ${20 / 16}rem;
  padding-right: 55px;
`;

const Progress = styled.progress`
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance: none;
  
  height: inherit;
  width: 378px;
  &::-moz-progress-bar{
    border-radius: 4px;
    color: var(--color);
    background-color: var(--background-color);
  }
  &::-webkit-progress-bar{
    border-radius: 4px;
    background: var(--background-color);
  }
  &::-webkit-progress-value{
    border-radius: 4px;
    background-color: var(--color);
  }
`;

const Wrapper = styled.div`
  display: inline;
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
  `;

const ShadowWrapper = styled(Wrapper)`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15}
`;

const SIZES = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
    "--padding": "0px"
  },
  medium: {
    "--height": "16px",
    "--border-radius": "4px",
    "--padding": "0px"
  },
  large: {
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "10px 4px 2px 4px"
  }
};

const progressStyles = {
  "--color": COLORS.primary,
  "--background-color": COLORS.transparentGray15,
};

const ProgressBar = ({ value, size }) => {
  const Div = size === 'large' ? ShadowWrapper : Wrapper;
  return <section>
    <Label htmlFor="file">{value}%</Label>
    <Div style={SIZES[size]}>
      <Progress id="file" max="100" value={value} style={progressStyles}/>
    </Div>
  </section>
};

export default ProgressBar;
