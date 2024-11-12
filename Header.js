import React from 'react';

function Header() {
    return (
        <header style={styles.header}>
            <h1>Batabit</h1>
            <nav>
                <ul style={styles.navList}>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#prices">Precios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        gap: '15px'
    }
};

export default Header;
