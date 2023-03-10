import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { Layout } from '../layout/layout';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout/>}
      >
        <Route index element={<MainPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
