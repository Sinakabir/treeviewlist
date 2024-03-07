
import Menulist from './menulist'
import './Menu.css'

export default function Treeview({menus = []}){
  return (
    <div className='tree-view-container'>
    <Menulist list={menus}/>
    </div>
    
  )

}

