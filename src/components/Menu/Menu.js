import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu({
  menu,
  depth,
  branch,
  setBranch,
  branchDict,
  handleClick
}) {
  /**
   * This check ensures that the recursion
   * stops when a menu element does not have
   * any children
   */
  if (!menu || !menu.length) return null;

  /**
   * Props for Menu component being called again
   * inside this Menu component
   */
  const menuProps = {
    depth: depth + 1,
    branch,
    setBranch,
    branchDict,
    handleClick
  };

  /**
   * This function is used to build the branchDict object
   * and is called while mapping the menu object.
   * Since recursion is needed to traverse the menu object,
   * we use the recursion in rendering the menu to populate branchDict.
   * Because making another recursive function just for this purpose will
   * waste processing time
   * @param {number} id The menu item ID
   * @param {string} slug The unique string representation of the menu element
   * @param {boolean} noParent Check of the menu element has any parent element
   * @param {string} parentSlug The unique string representation of the menu element's parent
   */
  const buildBranch = (id, slug, noParent, parentSlug) => {
    branchDict[slug] = noParent ? [id] : [...branchDict[parentSlug], id];
  };

  /**
   * We return an array of menu elements by mapping through
   * the menu object that is passed to us. Since the menu object
   * has a tree structure, we need to use recursion to reach all
   * the elements by calling the Menu component again inside this
   * Menu component
   */
  return menu.map((item) => (
    <React.Fragment key={item.id}>
      {/*
       The first layer of menu is always visible, so
       when depth is 0 (zero) we show the menu element.
       Also when the menu element's parent id is in the 
       branch array we make the element visible
       */}
      {depth === 0 || branch.includes(item.parent.id) ? (
        <NavLink
          onClick={handleClick} // we call the handleClick function from index.js
          style={{ paddingLeft: 15 * depth }} // we use depth for indentation purposes
          to={item.path}
        >
          {item.name}
        </NavLink>
      ) : null}

      {/*
       We call the buildBranch function within the return
       section to make use of the recursion while building
       the branchDict dictionary. The parameters passed are
       described above in the function declaration
       */}
      {buildBranch(
        item.id,
        item.slug,
        item.parent.id === null,
        item.parent.slug
      )}

      {/*
       Menu comopnent being called here for recursion
       but instead of passing menu, we pass item.children
       as the prop, which has exactly the same structure as
       the menu object, they're both an array of objects
       */}
      <Menu {...menuProps} menu={item.children} />
    </React.Fragment>
  ));
}
