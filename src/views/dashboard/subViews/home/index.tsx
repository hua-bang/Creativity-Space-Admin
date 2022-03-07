import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      this is home;
      <button onClick={() => { navigate('demo') }}>to</button>
    </div>
  );
}

export default Home;