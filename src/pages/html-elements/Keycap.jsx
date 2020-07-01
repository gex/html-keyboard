import React from 'react'
import styled from 'styled-components'
import {
  BASE_RADIUS,
  BASE_SIZE,
  DEFAULT_ITEM_SIZE,
  DISH_SIZE,
  DISH_RADIUS,
  UNIT
} from './config'

const StyledDiv = styled.div`
  --horizontalOffset: ${(props) =>
    ((UNIT - DISH_SIZE) / (props.width * UNIT) / 2) * 100}%;
  --verticalOffset: ${(props) =>
    ((UNIT - DISH_SIZE) / (props.height * UNIT) / 2) * 100}%;
  --horizontalRadius: ${(props) =>
    (DISH_RADIUS / ((props.width - 1) * UNIT + BASE_SIZE)) * 100}%;
  --verticalRadius: ${(props) =>
    (DISH_RADIUS / ((props.height - 1) * UNIT + BASE_SIZE)) * 100}%;

  color: ${(props) => props.color || '#ffffff'};
  grid-column-start: ${(props) => props.x * DEFAULT_ITEM_SIZE + 1};
  grid-column-end: span ${(props) => props.width * DEFAULT_ITEM_SIZE};
  grid-row-start: ${(props) => props.y * DEFAULT_ITEM_SIZE + 1};
  grid-row-end: span ${(props) => props.height * DEFAULT_ITEM_SIZE};
  padding-bottom: ${(props) => (props.height / props.width) * 100}%;
  position: relative;

  &::after {
    background: currentColor;
    border-radius: var(--horizontalRadius) / var(--verticalRadius);
    bottom: var(--verticalOffset);
    content: '';
    left: var(--horizontalOffset);
    position: absolute;
    right: var(--horizontalOffset);
    top: var(--verticalOffset);
  }
`

const StyledSpan = styled.span`
  --horizontalOffset: ${(props) =>
    ((UNIT - BASE_SIZE) / (props.width * UNIT) / 2) * 100}%;
  --verticalOffset: ${(props) =>
    ((UNIT - BASE_SIZE) / (props.height * UNIT) / 2) * 100}%;
  --horizontalRadius: ${(props) =>
    (BASE_RADIUS / ((props.width - 1) * UNIT + BASE_SIZE)) * 100}%;
  --verticalRadius: ${(props) =>
    (BASE_RADIUS / ((props.height - 1) * UNIT + BASE_SIZE)) * 100}%;

  background: currentColor;
  border-radius: var(--horizontalRadius) / var(--verticalRadius);
  bottom: var(--verticalOffset);
  left: var(--horizontalOffset);
  position: absolute;
  right: var(--horizontalOffset);
  top: var(--verticalOffset);

  &::before {
    background: rgba(0, 0, 0, 0.15);
    border-radius: inherit;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Keycap = (props) => (
  <StyledDiv {...props}>
    <StyledSpan {...props} />
  </StyledDiv>
)

export default Keycap
