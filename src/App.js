import './App.css';
import { Provider } from 'react-redux';
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import Watch from "./components/Watch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      }, 
      {
        path: "watch",
        element: <Watch/>
      }
    ]
  }
]);

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <Head></Head>
      <RouterProvider router={appRouter} />
\    </div>
    </Provider>
  );
}

export default App;
