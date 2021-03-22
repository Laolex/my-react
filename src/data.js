import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import pic1 from "./assets/pic-1.jpg";
import pic2 from "./assets/pic-2.jpg";
import pic3 from "./assets/pic-3.jpg";
import pic4 from "./assets/pic-4.jpg";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/laolex55",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
];

export const infos = [
  {
    id: 1,
    text: "Hi, I am Otegbade Olaoluwa Emmanuel and I'm a web developer",
    img: <img src={pic1} alt="me" />,
  },
  {
    id: 2,
    text: "I work with html, css, Vanilla Js, ReactJs as a front-end engineer",
    img: <img src={pic2} alt="me" />,
  },
  {
    id: 3,
    text: "I work with Python(django) and NodeJs as back-end engineer",
    img: <img src={pic3} alt="me" />,
  },
  {
    id: 4,
    text: "Database quality includes postgresDB and mongoDB",
    img: <img src={pic4} alt="me" />,
  },
];
