import Navbar from "./components/layout/navBar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {

  return (<div>
      <Navbar />
      <ItemListContainer greeting={'Los mejores precios en Accesorios'}/>
  </div>
  )
}

export default App;
