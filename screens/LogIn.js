import React, { useEffect, useState } from 'react';
import { StyleSheet,View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';


const image = { uri: "https://cdn.pixabay.com/photo/2017/07/27/23/00/background-2547097_960_720.jpg" };
const LogIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }



  return(
    <ImageBackground source={image} style={styles.image}>
      <KeyboardAvoidingView style={styles.container}>
        
          
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
               value={ email}
               onChangeText={text => setEmail(text) }
              style={styles.input}/>

            <TextInput
              placeholder="Password"
               value={password}
               onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
              />
          </View>
          <View style={styles.buttonContainer}>
              <TouchableOpacity
              onPress ={handleLogin}
              style={[styles.button]}>
                  <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress ={handleSignUp}
              style={[styles.button, styles.buttonOutline]}>
                  <Text style={styles.buttonOutlineText}>Register</Text>
              </TouchableOpacity>
          </View>
          
      </KeyboardAvoidingView >
      </ImageBackground>
  )

}
export default  LogIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer:{
      width:'80%',
  },
  input:{
    backgroundColor: '#fff',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,

  },
  button:{
      backgroundColor:'#929FFF',
      width:'100%',
      padding:15,
      borderRadius:10,
      alignItems:'center',

  },
  buttonOutline:{
      backgroundColor:'white',
      marginTop: 5,
      borderColor:'#929FFF',
      borderWidth: 2,


  },
  buttonOutlineText:{
    color:'#929FFF',
    fontWeight:'700',
    fontSize:16,

  },
  buttonText:{
     color:'white',
     fontWeight:'700',
     fontSize:16,

      
  },
  buttonContainer:{
      width: '60%',
      justifyContent: 'center',
      alignItems:'center',
      marginTop:40,

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});