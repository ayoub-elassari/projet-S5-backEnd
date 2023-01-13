import React from "react";
import TextTransition, { presets } from "react-text-transition";


export default function Slogon() {
    
const TEXTS = [
    "NO FEAR NO LIMITS NO EXECUSES",
    "SURPASS YOUR LIMIT RIGHT NOW !",
    "JOIN THE CLUB SPORT FOR LIFE !",
  
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
          <h1>
          <div className="ml-18 text-2xl  text-red-600 font-bold">
      <TextTransition springConfig={presets.wobbly}>
      
        {TEXTS[index % TEXTS.length]}
        
      </TextTransition>
      </div>
    </h1>
    </div>
  )
}



 