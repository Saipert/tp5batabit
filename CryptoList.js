import React from 'react';

function CryptoList() {
    // Datos de ejemplo para la lista de criptomonedas
    const cryptos = [
        { id: 1, name: 'Bitcoin', price: '$30,000', change: '+2.5%' },
        { id: 2, name: 'Ethereum', price: '$2,000', change: '-1.2%' },
        { id: 3, name: 'Cardano', price: '$1.50', change: '+3.1%' }
    ];

    return (
        <section style={styles.section}>
            <h2>Lista de Criptomonedas</h2>
            <ul style={styles.cryptoList}>
                {cryptos.map((crypto) => (
                    <li key={crypto.id} style={styles.cryptoItem}>
                        <h3>{crypto.name}</h3>
                        <p>Precio: {crypto.price}</p>
                        <p>Cambio: {crypto.change}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const styles = {
    section: {
        padding: '20px',
        backgroundColor: '#f0f0f0'
    },
    cryptoList: {
        listStyle: 'none',
        padding: 0
    },
    cryptoItem: {
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '8px'
    }
};

export default CryptoList;
