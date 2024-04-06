import './App.css';
import React from "react";

function Header() {
  return (
      <>
        <h1>header</h1>
          <p>Lorem ipsum dolor.</p>
          <Title/>
      </>
  )
}

function Content() {
    return (
        <>
            <h2>Content</h2>
            <p>Content Lorem ipsum dolor.</p>
            <Title/>
        </>
    )
}
function Footer() {
  return (
      <>
          <h2>Footer</h2>
        <p>Footer Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eum.</p>
          <Title/>

      </>
  )
}
function Title() {
    return (
        <>
            <h1>Title</h1>
        </>
    )
}
function App() {
  return (
    <div className="App">
      <Header/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <Content />
        <Footer/>
    </div>
  );
}

export default App;
