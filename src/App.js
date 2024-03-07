import Treeview from "./Components/Treeview";
import menus from "./Components/data";


function App() {
  return (
    <div >
      <Treeview menus={menus}/>
    </div>
  );
}

export default App;
