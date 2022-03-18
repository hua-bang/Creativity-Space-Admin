import { ReactElement, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';
import AuthWrapper from './components/Auth/AuthWrapper';

function App() {

  return (
    <div className="App">
      <div>
        <Routes>
          {
            routes.map((route, index) => {
              const { auth, path, element, redirectPath } = route;

              return (
                <Route 
                  key={path}
                  path={path}
                  element={
                    auth 
                    ? (
                      <AuthWrapper key={path} auth={auth} redirectPath={redirectPath}>
                        {element as ReactElement<any, any>}
                      </AuthWrapper>
                    ) :
                    element
                  }
                />
              );

              return 
                
            })
          }
        </Routes>
      </div>
    </div>
  )
}

export default App
