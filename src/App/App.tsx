import '../index.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getCounter } from '../store/counter/selectors';
import { Dispatch } from '../store';
import { decrease, increase } from '../store/counter';

const StyledDiv = styled.div`
  color: white;
  text-align: center;
`;

const Counter = styled.div`
  height: 20px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;

  background-color: darkred;
  color: white;
  margin: 20px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;
`;

const App = () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch<Dispatch>();

  return (
    <div>
      <StyledDiv className="tailwind_class"> React Boilerplate </StyledDiv>
      <Counter>
        <Button onClick={() => dispatch(decrease(10))}>-</Button>
        Counter: {counter}
        <Button onClick={() => dispatch(increase(10))}>+</Button>
      </Counter>
    </div>
  );
};

export default App;
