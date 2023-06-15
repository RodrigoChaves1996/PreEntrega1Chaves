import Navbar from "./components/layout/navBar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";

const App = () => {

  return (<div>
      <Navbar />
      <Login />
      <ItemListContainer greeting={'Los mejores precios en Accesorios y Productos'}/>


  </div>
  )
}

export default App;
