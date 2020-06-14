import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import axios from 'axios';
import Price from './components/Price';


const App = () => {

  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [queryApi, setQueryApi] = useState(false);
  const [resultExchange, setResulExchange] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const calculateCryptyo = async () => {
      if (queryApi) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`
        const result = await axios.get(url);

        setLoading(true);

        setTimeout(() => {
          setResulExchange(result.data.DISPLAY[cryptocurrency][currency]);
          setQueryApi(false);
          setLoading(false);
        }, 3000);
      }
    }

    calculateCryptyo();

  }, [queryApi])

  const spinnerAction = loading ? <ActivityIndicator size='large' color='orange' /> : <Price resultExchange={resultExchange} />

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <Header />

        <Image
          style={styles.imgMain}
          source={require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.content}>
          <Form
            currency={currency}
            setCurrency={setCurrency}
            cryptocurrency={cryptocurrency}
            setCryptocurrency={setCryptocurrency}
            setQueryApi={setQueryApi}
          />

          <View style={{ marginTop: 20 }}>
            {spinnerAction}
          </View>

        </View>
      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  imgMain: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  content: {
    marginHorizontal: '2.5%'
  }
});

export default App;
