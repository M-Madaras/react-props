import { useState } from "react";

function Menubar({ name, setName }){
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between'}}>
       <span>Menubar</span> 
       {name
       ? <button onClick={() => setName(null)}>Logout</button>
       : <button onClick={() => setName('Mason')}>Login</button>
       }
    </nav>
  )
}


export default Menubar;