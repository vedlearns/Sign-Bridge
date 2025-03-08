import { createContext, useState } from "react";

export const SignContext = createContext();

export const SignContextProvider = ({ children }) => {
  const [currentSign, setCurrentSign] = useState("waiting...");
  const [confirmedSign, setConfirmedSign] = useState(null);
  const [sentence, setSentence] = useState([]);
  const signs = [
    { name: "ASL Alphabet Signs", image: "/images/ViewSignsPage/Alphabet.jpg" },
    { name: "Number Signs", image: "/images/ViewSignsPage/Numbers.jpeg" },
    {
      name: "Basic Introduction Signs ",
      image: "/images/ViewSignsPage/Intro.jpeg",
    },
    {
      name: "Basic Interrogative Signs",
      image: "/images/ViewSignsPage/Interrogative.jpg",
    },
    { name: "Feelings Signs", image: "/images/ViewSignsPage/Feelings.jpeg" },
    { name: "Weeks Signs", image: "/images/ViewSignsPage/Weeks.jpeg" },
    { name: "Colors Signs", image: "/images/ViewSignsPage/Colors.jpeg" },
  ];

  const pdf = [
    {
      name: "SIGN LANGUAGE VOCAB CARDS",
      purpose: "Providing easy Learn for Kids ",
      src: "/PDF/Sign Language Vocab Cards Author Arlington Public Schools.pdf",
      info: "In this file you will find a set of vocabulary cards that can contain ASL signs for each word.  These words have been selected because they are 59 of the most common first words in children with typically developing speech and language. ",
    },
    {
      name: "DISCOVER THE MAGIC OF SIGNING SONGS",
      purpose: "Providing easy learning to kids through Signing Songs",
      src: "/PDF/Discover The Magic of Signing Songs Enhancing All Childrens Language Literacy Engagement and Joy Author Nellie Edge.pdf",
      info: "Signing songs helps build an active, joyful community of learners.  These children are performing signed songs at a multicultural school assembly.",
    },
    {
      name: "American Sign Language The Easy Way",
      purpose: "Easy Learning ",
      src: "/PDF/SASL. A teacher, friend & family resource for beginners, Wits University.pdf",
      info: "American Sign Language the Easy Way is designed to make you a better signer. Here are some suggestions for using this book:",
    },
    {
      name: "SIMPLIFIED SIGNS",
      purpose: "Manual Sign Communication System",
      src: "/PDF/Simplified Signs, John D. Bonvillian, Nicole Kissane Lee.pdf",
      info: "This document presents a manual sign-communication system designed for individuals with limited success in mastering spoken or full sign languages, particularly targeting special populations such as those with intellectual disabilities, autism, or aphasia.",
    },
    {
      name: "SIGN LANGUAGES AND THE COMMON EUROPEAN FRAMEWORK OF REFERENCES FOR LANGUAGES ",
      purpose: "Providing Framework of References for Languages",
      src: "/PDF/Sign languages and the Common European Framework of Reference for Languages, Lorraine Leeson, Beppie van den Bogaerde, Christian Rathmann.pdf",
      info: " This paper describes the PRO-Sign project, which established European standards for sign language proficiency, particularly in educational contexts.",
    },
    {
      name: "CREATE A WORLD OF DEAF READERS ",
      purpose: "Standards for Sign Language Storybooks",
      src: "/PDF/Create a World of Deaf Readers, Chris Kurz, Truc Nguyen.pdf",
      info: "This is a document that establishes standards for the creation of children's books in sign language, aimed at undeserved communities.",
    },
    {
      name: "SASL",
      purpose: "A teacher, friend & family resource for beginners",
      src: "/PDF/SASL. A teacher, friend & family resource for beginners, Wits University.pdf",
      info: "Quick and easy reference to learning South African signs with SASL, English, Zulu & Afrikaans",
    },
  ];

  const signImg=[
    {name:"0",src:"/images/Signs/0.jpeg"},
    {name:"1",src:"/images/Signs/1.jpeg"},
    {name:"2",src:"/images/Signs/2.jpeg"},
    {name:"3",src:"/images/Signs/3.jpeg"},
    {name:"4",src:"/images/Signs/4.jpeg"},
    {name:"5",src:"/images/Signs/5.jpeg"},
    {name:"6",src:"/images/Signs/6.jpeg"},
    {name:"7",src:"/images/Signs/7.jpeg"},
    {name:"8",src:"/images/Signs/8.jpeg"},
    {name:"9",src:"/images/Signs/9.jpeg"},
    {name:"10",src:"/images/Signs/10.jpeg"},
    {name:"a",src:"/images/Signs/a.jpeg"},
    {name:"b",src:"/images/Signs/b.jpeg"},
    {name:"c",src:"/images/Signs/c.jpeg"},
    {name:"d",src:"/images/Signs/d.jpeg"},
    {name:"e",src:"/images/Signs/e.jpeg"},
    {name:"f",src:"/images/Signs/f.jpeg"},
    {name:"g",src:"/images/Signs/g.jpeg"},
    {name:"h",src:"/images/Signs/h.jpeg"},
    {name:"i",src:"/images/Signs/i.jpeg"},
    {name:"j",src:"/images/Signs/j.jpeg"},
    {name:"k",src:"/images/Signs/k.jpeg"},
    {name:"l",src:"/images/Signs/l.jpeg"},
    {name:"m",src:"/images/Signs/m.jpeg"},
    {name:"n",src:"/images/Signs/n.jpeg"},
    {name:"o",src:"/images/Signs/o.jpeg"},
    {name:"p",src:"/images/Signs/p.jpeg"},
    {name:"q",src:"/images/Signs/q.jpeg"},
    {name:"r",src:"/images/Signs/r.jpeg"},
    {name:"s",src:"/images/Signs/s.jpeg"},
    {name:"t",src:"/images/Signs/t.jpeg"},
    {name:"u",src:"/images/Signs/u.jpeg"},
    {name:"v",src:"/images/Signs/v.jpeg"},
    {name:"w",src:"/images/Signs/w.jpeg"},
    {name:"x",src:"/images/Signs/x.jpeg"},
    {name:"y",src:"/images/Signs/y.jpeg"},
    {name:"z",src:"/images/Signs/z.jpeg"},
  ]

  return (
    <SignContext.Provider
      value={{
        currentSign,
        setCurrentSign,
        confirmedSign,
        setConfirmedSign,
        sentence,
        setSentence,
        signs,
        signImg,
        pdf,
      }}
    >
      {children}
    </SignContext.Provider>
  );
};
