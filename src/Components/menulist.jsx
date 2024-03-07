
import Menuitem from './menuitem'

export default function Menulist({list = []}){
  return (
    <ul className='menu-list-container'>

      {
        list && list.length ?
        
        list.map((listItem)=>
          <Menuitem item={listItem}/>
      
          )
        : null
      }

    </ul>
  )
}

