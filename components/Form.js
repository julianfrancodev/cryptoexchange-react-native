import React, { useState, useEffect } from 'react'

import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

export default function Form({ currency, setCurrency, cryptocurrency, setCryptocurrency, setQueryApi }) {


    const [cryptocurrencies, setCryptocurrencies] = useState([]);


    useEffect(() => {
        const queryAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await axios.get(url);
            await setCryptocurrencies(response.data.Data);
        }
        queryAPI();
    }, [])

    const getCurrency = (currency) => {
        console.log(currency)
        setCurrency(currency);
    }

    const getCrytoCurrencie = (cryptoCurrency) => {
        console.log(cryptoCurrency);
        setCryptocurrency(cryptoCurrency);
    }

    const calculatePrice = () => {

        if (currency.trim() === '' ||
            cryptocurrency.trim() === '') {
            showAlert();
            return;
        }

        setQueryApi(true);
    }

    const showAlert = () => {
        Alert.alert(
            'Error',
            'Ingrese valores validos',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
        )
    }

    return (
        <>
            <View>
                <Text style={styles.label}>
                    Currency
                </Text>

                <Picker
                    selectedValue={currency}
                    onValueChange={currency => getCurrency(currency)}
                    itemStyle={{ height: 120 }}
                >
                    <Picker.Item label='-- Seleccione --' value='' />
                    <Picker.Item label='Dollar USA' value='USD' />
                    <Picker.Item label='Peso Colombiano' value='COP' />
                    <Picker.Item label='Euro' value='EUR' />
                    <Picker.Item label='Libra Esterlina' value='GPB' />
                </Picker>

                <Text style={styles.label}>
                    CryptoCurrency
                </Text>

                <Picker
                    selectedValue={cryptocurrency}
                    onValueChange={currency => getCrytoCurrencie(currency)}
                    itemStyle={{ height: 120 }}
                >
                    <Picker.Item label='-- Seleccione --' value='' />

                    {cryptocurrencies.map(crypto => (
                        <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name} />
                    ))}
                </Picker>

                <TouchableOpacity
                    style={styles.btnCalculate}
                    onPress={() => calculatePrice()}
                >
                    <Text style={styles.textCalculate}>
                        Calculate
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    btnCalculate: {
        backgroundColor: 'orange',
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        elevation: 0.5

    },
    textCalculate: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})
