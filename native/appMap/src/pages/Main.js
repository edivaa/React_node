import React from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'


function Main () {
    return <MapView 
    initialRegion={{
        latitude: -27.2106710,
        longitude: -49.6362700,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0031
    }}
    
       style={styles.MapView}
       rotateEnabled= {false}
       scrollEnabled= {false}
       zoomEnabled={false}
       showsPointsOfInterest={false}
       showsBuildings={false}
       
       />
}

const styles  = StyleSheet.create({
    mapView : {
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right: 0
    }
})

export default Main