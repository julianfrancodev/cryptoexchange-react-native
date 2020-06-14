import React from 'react'

import { Text, StyleSheet, Platform,View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>CryptoCurrencies</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    header: {
        marginTop: Platform.OS === 'ios' ? 50 : 0,
        backgroundColor: 'orange',
        paddingTop: 30,
        paddingBottom: 15,
        elevation: 0.5
    },
    textHeader: {
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#fff',
        marginTop:10
    }
})