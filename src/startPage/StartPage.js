import React, { useState, useEffect } from "react";
import { social, infos } from "../data";
import NavBar from "../navBar/NavBar";
// import clouds from "../assets/Clouds.jpg";
import bg from "../assets/bg.jpg";
import mountain from "../assets/mountain.png";
import moon from "../assets/moon.png";
import styles from "./StartPage.module.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function StartPage() {
  const [offsetY, setOffsetY] = useState(0);
  const [date, setDate] = useState("");
  const [index, setIndex] = useState(0);
  const { id, text } = infos[index];
  const handleScroll = () => setOffsetY(window.scrollY);

  const getDate = () => {
    const showDate = new Date();
    let date = showDate.getFullYear();
    setDate(date);
  };

  const checkNumber = (number) => {
    if (number > infos.length - 1) {
      return 0;
    }
    if (number < 0) {
      return infos.length - 1;
    }
    return number;
  };

  const prevPerson = (id) => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = (id) => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * infos.length);
    setIndex(random);
  };

  useEffect(() => {
    getDate();
  }, [date]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section>
        <img src={bg} alt="bg" style={{ top: `${offsetY * 0.5}px` }} />
        <img src={moon} alt="moon" style={{ left: `${offsetY * 0.5}px` }} />
        {/* <img src={clouds} alt="clouds" style={{ top: `${offsetY * 0.5}px` }} /> */}
        <img
          src={mountain}
          alt="mountain"
          style={{ top: `${offsetY * 0.15}px` }}
        />
        <h2 className={styles.text} style={{ top: `${offsetY * 1}px` }}>
          LaolexDotCom
        </h2>
      </section>
      <div className={styles.enterBtn}>
        <NavBar />
        <div className={styles.container}>
          <header>
            <h3>about me</h3>
            <div className={styles.underline}></div>
          </header>
          <div className={styles.center}>
            <p>{text}</p>
          </div>
          <footer>
            <hr />
            <button className={styles.prev} onClick={prevPerson}>
              <FiChevronLeft />
            </button>
            <button className={styles.next} onClick={nextPerson}>
              <FiChevronRight />
            </button>
            <button className={styles.randomBtn} onClick={randomPerson}>
              Random
            </button>
          </footer>
          {/* <FaQuoteRight /> */}
        </div>
        <div className={styles.footer}>
          <footer>
            <p>©{date}, LaolexDotCom</p>
            <div>
              <ul className={styles.icon}>
                {social.map((links) => {
                  const { id, url, icon } = links;
                  return (
                    <li key={id}>
                      <a href={url}>{icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default StartPage;
