import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

   let detailsToDisplay = <div>Hi, I'm a div!</div>;
  //   switch(stateObj){
  //     case state: 

  //   }
    
  // const stateObj = {
  //   user:false,
  //   photo: false,
  //   cocktail: false,
  //   themeisle: false
  // }

  const [clicked , setClick] = useState("user")


  function handleClick(item){

    // const newObj = {
    //   ...stateObj,
    //   [item]: true
    // }
    setClick(item)
  }


  return (
    <div>
      <MenuBar handleClick= {handleClick} clicked= {clicked} setClick={setClick}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
