import React, { useState, useEffect, useRef } from "react";
import { links, social } from "../data";
import { FaBars } from "react-icons/fa";
import classes from "./NavBar.module.css";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <>
      <nav>
        <div className={classes.navCenter}>
          <div className={classes.navHeader}>
            <h3>LaolexDotCom</h3>
            <button
              className={classes.navToggle}
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div className={classes.linksContainer} ref={linksContainerRef}>
            <ul className={classes.links} ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={classes.socialIcons}>
            {social.map((items) => {
              const { id, url, icon } = items;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
