import { createContext, useState } from "react";


const ColorContext = createContext({
  state : {color: 'black', subcolor: 'red'},
  actions: {
    setColor : () => {},
    setSubcolor: () => {}
  }
});
const ColorContext = createContext({});
const ColorProvider = ({children}:any) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');
  
  const value = {
      state : {color, subcolor},
      actions : { setColor, setSubcolor }
  };

  return (
      <ColorContext.Provider value={value} >{children}</ColorContext.Provider>
  );
};

//const ColorConsumer = ColorContext.consumer 와 같은 의미이다.
const { Consumer: ColorConsumer} = ColorContext;

export { ColorProvider, ColorConsumer}

export default ColorContext;
