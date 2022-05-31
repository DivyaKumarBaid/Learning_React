// This is an example where I have used Reducer on context i.e. global level

import React from 'react';
import InputFields from './component/InputFields';
import { TodoContext } from './component/Todo';


const App = () => {

  return (
    <TodoContext>
      <InputFields/>
    </TodoContext>
  );
}

export default App;
