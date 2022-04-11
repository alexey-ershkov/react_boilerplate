import '../index.scss';

import { DocumentCard, PlainCard } from '@fluentui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Dispatch } from '../store';
import { asyncIncrease, decrease, increase } from '../store/counter';
import { getCounter } from '../store/counter/selectors';

const StyledDocumentCard = styled(DocumentCard)`
  height: 50vh;
  min-width: 50vw !important;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  useEffect(() => {
    dispatch(asyncIncrease());
  }, []);

  return (
    <StyledDocumentCard>
      <Counter>
        <Button onClick={() => dispatch(decrease(10))}>-</Button>
        Counter: {counter}
        <Button onClick={() => dispatch(increase(10))}>+</Button>
      </Counter>
    </StyledDocumentCard>
  );
};

export default App;
