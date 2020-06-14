import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

export default function Price({ resultExchange }) {

    if (Object.keys(resultExchange).length === 0) return null;

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.price}>
                    <Text style={styles.span}>
                        {resultExchange.PRICE}
                    </Text>
                </Text>

                <Text style={styles.text}>
                    Highest price: {' '}
                    <Text style={styles.span}>
                        {resultExchange.HIGHDAY}
                    </Text>
                </Text>

                <Text style={styles.text}>
                    lower Pirce: {' '}
                    <Text style={styles.span}>
                        {resultExchange.LOWDAY}
                    </Text>
                </Text>

                <Text style={styles.text}>
                    Last 24/7 hours: {' '}
                    <Text style={styles.span}>
                        {resultExchange.CHANGEPCTDAY} %
                    </Text>
                </Text>


                <Text style={styles.text}>
                    Last Update:{' '}
                    <Text style={styles.span}>
                        {resultExchange.LASTUPDATE}
                    </Text>
                </Text>
            </View>
        </>
    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 20,
        elevation: 0.5
    },
    text: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
        textAlign:'center'
    },
    price: {
        fontSize: 38,
        color: '#fff',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
        textAlign: 'center'
    },
    span: {
        fontFamily: 'Lato-Black',

    }
})
