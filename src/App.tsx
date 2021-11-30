import './index.scss';

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: white;
  text-align: center;
`;

const App = () => {
  return <StyledDiv className="tailwind_class"> React Boilerplate </StyledDiv>;
};

export default App;
