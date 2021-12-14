import React from "react";
import {StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native';

const Market = ({name,symbol,currentPrice,priceChangePercentage7d, logoUrl }) => {

    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';


    return (
    <TouchableOpacity>
        <View style={styles.container}>
        <View style={styles.wrapper}>

        {/* Logo */}
        <View style={styles.logo}>
            <Image source ={{uri:logoUrl}}style={styles.image}/>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{symbol}</Text>
            </View>
        </View>


        {/* Raha */}
        <View style={styles.money}>
            <Text style={styles.title}>{currentPrice.toLocaleString({currency: 'EUR'})} €</Text>
            <Text style={[styles.subtitle, {color:priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>

        </View>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#DEE2FF' ,
      },
    wrapper:{
        paddingHorizontal: 15,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        

    },
    logo:{
        flexDirection:'row',
        alignItems:'center',

    },
    image:{
        height:48,
        width:48,

    },
    money:{
        alignItems:'flex-end',

    },
    title:{
        fontSize: 18,


    },
    subtitle:{
        fontSize: 14,
        color:'grey',
        marginTop:4,
        textTransform:'uppercase',

    },
    titleWrapper:{
        marginLeft:8,

    }

})

export default ListItem