import Contact from './components/Contact';
import logo from './logo.svg';
import './styles/App.css';
import {useRoutes, Link} from "react-router-dom"
import { Home } from './components/Home';
import { Alta } from './components/Alta';


function App() {
  // console.log(process.env.REACT_APP_BACKED_URL)
  // console.log(process.env.REACT_APP_BACKED_URL)
  let element = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/Alta", element: <Alta/> },
    { path: "/Contact", element: <Contact /> },
  ]);
  return element
}
export default App;

/* PUNTOS A CORREGIR
-AJUSTAR EL TAMAÑO DE LA IMAGEN DE MAPS
-Con respecto a SASS, es recomendable que prestes atención a la estructura de archivos
que tenes, es aconsejable que separes en carpetas distintas los archivos sass y css.
Trabajaste super bien la anidación de SASS. 
185287 patito  */