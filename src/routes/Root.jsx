import React from 'react'
import { Link } from 'react-router-dom';

function Root() {
   return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
           <ul>
             {
             /*
               用a href會重load url，不符合SPA，建議用Link做
            */
            }
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
             </li>
             {
               /*
               用下面這個做法不會url reload
               */
             }
            <li>
              <Link to={`/contacts/3`}>Your Name1</Link>
            </li>
            <li>
              <Link to={`/contacts/4`}>Your Friend1</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

export default Root
