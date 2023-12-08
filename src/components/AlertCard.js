import { useState } from "react"

const AlertCard = ({result, children}) => {
    const [show, setShow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
    <div className={`box ${result}`}>
      {children}
    </div>
    <button onClick={()=>setShow(!show)} className="tigger">Hide</button>
    </div>
    
  )
}

export default AlertCard;
