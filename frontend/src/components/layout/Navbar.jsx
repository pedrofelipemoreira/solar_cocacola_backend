import { Link } from 'react-router-dom';

import styles from './Navbar.module.css'

function Navbar (){

    return(
        <nav className={styles.navbar}>

            <div className={styles.navbar_logo}>
                <h2>Solar Coca Cola</h2>
            </div>

            <ul>

                <li>
                    <Link to="/" > Home </Link>
                </li>

                <li>
                    <Link to="/createClient" > Criar Cliente </Link>
                </li>

                <li>
                    <Link to="clients" > Clientes </Link>
                </li>

            </ul>

        </nav>

    )

}

export default Navbar;