import React from 'react';
import { IndexLink, Link } from 'react-router';

import logo from './roc.png';
import styles from './style.scss';

export default () =>
   (
     <div className={styles.header}>
       <ul className={styles.menu}>
         <li>
           <IndexLink
             to="/"
             className={styles.item}
             activeClassName={styles.active}
           >
          Start
           </IndexLink>
         </li>
         <li>
           <Link
             to="/fetching/"
             className={styles.item}
             activeClassName={styles.active}
           >
          Data-fetch
           </Link>
         </li>
         <li>
           <Link
             to="/redux/"
             className={styles.item}
             activeClassName={styles.active}
           >
          Redux
           </Link>
         </li>
       </ul>
       <img className={styles.logo} src={logo} alt="Logo" />
     </div>
  )
;
