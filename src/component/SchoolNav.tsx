
import { SetStateAction, useState } from "react";
import NavItem from "./navItems/NavItem";
import NotificationSvg from './imageComponent/NotificationSvg'
import DragBoxSvg from './imageComponent/DragBoxSvg'
import EnumLogoSvg from'./imageComponent/EnumLogoSvg'




const SchoolNav = () => {
    const [selectedItem, setSelectedItem] = useState('Home');
  
    const handleItemClick = (item:string) => {
      setSelectedItem(item);
    };
  
    return (
      <div className="flex">
        <div>
          <EnumLogoSvg/>
        </div>
        <div className="flex items-center pt-5 w-full"> 
          <NavItem item={'Home'} isSelected={selectedItem === 'Home'} onClick={() => handleItemClick('Home')} />
          <NavItem item={'WorkSpace'} isSelected={selectedItem === 'WorkSpace'} onClick={() => handleItemClick('WorkSpace')} />
          <NavItem item={'Resources Library'} isSelected={selectedItem === 'Resources Library'} onClick={() => handleItemClick('Resources Library')} />
        </div>
        <div className="f">
        <div>
          <NotificationSvg/>
        </div>
       <div>
       <label>Onowomano</label>
            <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
       </div>
        <div>
          <DragBoxSvg/>
        </div>
      
        </div>
        
      </div>
    
    );
  };
  
  export default SchoolNav;
