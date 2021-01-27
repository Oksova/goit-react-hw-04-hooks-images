import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PicturesInfo from './components/PicturesInfo/PicturesInfo';

export default function App() {
  const [picturesName, setPicturesName] = useState('');

  return (
    <div>
      <SearchBar onSubmit={setPicturesName} />
      <PicturesInfo picturesName={picturesName} />
      <ToastContainer autoClose={2000} />
    </div>
  );
}
