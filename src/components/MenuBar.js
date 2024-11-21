import React from "react";
import { useState } from "react";

function MenuBar({handleClick, clicked}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */


  

  

  return (
    <div className="ui four item menu">
      <span onClick= {()=> handleClick("user")} className={clicked === "user" ? "item active" : "item"}>
        <i className="user large icon" />
      </span>

      <span onClick= {()=> handleClick("photo")} className={clicked === "photo" ? "item active" : "item"}>
        <i className="photo large icon" />
      </span>

      <span onClick= {()=> handleClick("cocktail")} className={clicked === "cocktail" ? "item active" : "item"}>
        <i className="cocktail large icon" />
      </span>

      <span onClick= {()=> handleClick("themeisle")} className={clicked === "themeisle" ? "item active" : "item"}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
