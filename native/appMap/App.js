/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './src/routes'



const App: () => React$Node = () => {
  return (
    <Routes />
  )
}

const styles = StyleSheet.create({
   container : {
     flex : 1,
     backgroundColor: '#7159c1',
     alignItems: 'center',
     justifyContent: 'center'
   },

   title : {
     fontWeight: 'bold',
     fontSize: 32,
     color: '#FFF'
   }
});

export default App;
