import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getRooms } from './store/actions/roomsActions';
import Wrapper from './components/Wrapper';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  return (
    <BrowserRouter>
      <Wrapper />
    </BrowserRouter>
  );
}

export default App;
