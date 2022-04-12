import { ReactElement, useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import 'bytemd/dist/index.css';
import 'highlight.js/styles/vs.css';
import 'github-markdown-css';
import routes, { RouteConfig, generateRouter } from './routes';
import SkeletonPage from './components/Skeleton-Page';
import { getUserInfo } from '@/api/admin';
import useStore from '@/hooks/useStore';

function App() {

  const [hasLoadInfo, setHasLoadInfo] = useState(false);

  const { userStore } = useStore();

  useEffect(() => {
    getUserInfo().then(res => {
    userStore.setUser(res.data, res.data.roles);
    }).finally(() => {
      setHasLoadInfo(true);
    });
  }, []);

  return (
    <div className="App">
      {
        hasLoadInfo 
          ? (
            <Routes>
              {generateRouter(routes)}
            </Routes>
          )
          : (
            <SkeletonPage />
          )
      }
      <div>
      
      </div>
    </div>
  )
}

export default App
