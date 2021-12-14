import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getCryptoData } from '../services/getCrypto';
import Market from '../components/Market';

const Home = () => {
  const navigation = useNavigation()
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchCryptotData = async () => {
      const cryptoData = await getCryptoData();
      setData(cryptoData);
    }

    fetchCryptotData();
  }, [])

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LogIn")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
          <View style={styles.market}> 
            <Text style={styles.largeTitle}>Markets</Text>
          </View>
          <View style={styles.signOutWrapper}>
            <Text> {auth.currentUser?.email}</Text>
          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
          </View >
      </View>
      <FlatList
           keyExtractor= {(item) => item.id}
            data ={data}
            renderItem={({item}) =>(
              <Market
                name={item.name} 
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                logoUrl={item.image} 
              />
            )}
          />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    
  },
   button: {
    backgroundColor: '#929FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  largeTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleWrapper:{
    marginTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:15,

  },
  signOutWrapper:{
    alignItems:'flex-end',

  },
  market:{
    flexDirection:'row',
    alignItems:'center',

  }
})