import React, { useState, useEffect } from "react";
import "./style.css";

import Menu from "./Menu";

export default function MenuWrapper({ menu }) {
  const [branch, setBranch] = useState([]);
  /**
   * We use the branchDict dictionary to determine
   * how the menu is opened up, the keys are all
   * slugs of the menu elements, and the values are
   * an array of element IDs which represents the
   * value of branch
   */
  const branchDict = {};
  // Extract slug from the URL
  const slug = window.location.pathname.slice(1);

  /**
   * Whenever a menu element is clicked we run this
   * function which retrieves an array value from
   * branchDict, using the slug as a key, and sets
   * it as the value of branch. In case the URL slug
   * is not a key in branchDict, which means the user
   * has visited other pages like help, contact, about,
   * etc. The value will be undefined. In whiche case
   * the menu will be closed and value of branch will be
   * an empty array
   */
  const handleClick = () => {
    if (branchDict[slug] !== undefined) {
      setBranch(branchDict[slug]);
    } else {
      setBranch([]);
    }
  };

  /**
   * This function helps to keep track of the branch array
   * when users go back and forward using the browser's buttons.
   * It retrieves the current slug, and uses it to get the array
   * from branchDict, and then updates branch
   */
  const handlePopstate = () => {
    const slug = window.location.pathname.slice(1);
    if (slug !== "") {
      let arr = branchDict[slug];

      if (arr !== undefined) {
        // If the slug is a valid key in branchDict, menu will be open
        setBranch(arr);
      } else {
        // If the slug is not any key in branchDict, menu is closed
        setBranch([]);
      }
    } else {
      // If the user is at home, where the URL is '/', menu is closed
      setBranch([]);
    }
  };

  const menuProps = {
    menu,
    depth: 0,
    branch,
    setBranch,
    branchDict,
    handleClick
  };

  /**
   * When user visits a URL directly instead of clicking
   * on the menu, we run the following code only once during
   * mounting of element, where we capture the slug, use it to
   * retrieve an array and then set that as the value of branch
   * to open the menu accordingly
   */
  useEffect(() => {
    if (slug !== "") {
      let menuArr = branchDict[slug];

      if (menuArr !== undefined) {
        setBranch(menuArr);
      }
    }
  }, [slug]);

  useEffect(() => {
    // On every render run handlePopstate
    window.addEventListener("popstate", handlePopstate);

    // When element is unmounted, we remmove the event listener
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  });

  return (
    <div id="menu_wrapper">
      <Menu {...menuProps} />
    </div>
  );
}
