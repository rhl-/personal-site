import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ryan H. Lewis</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, and Wall Street Quant.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ryan H. Lewis <Link to="/">ryanlewis.net</Link>.</p>
    </section>
  </section>
);

export default SideBar;
