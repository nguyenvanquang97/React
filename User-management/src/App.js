import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Index';
import NotFound from './components/notFound/Index';
import Footer from './components/Footer/Index';
import UserEdit from './features/UserEdit';
import UserList from './features/UserList';
import UserAdd from './features/UserAdd';

function App() {
  return (
    <>
      
      <Header/>
      <Routes>
      <Route path='/users'>
        <Route index element = {<UserList/>} />
        <Route path='create' element ={<UserAdd />} />
        <Route path=':userId' element = {<UserEdit />} />
      </Route>
      <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
