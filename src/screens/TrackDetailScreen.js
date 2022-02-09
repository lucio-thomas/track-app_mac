import React from 'react'
import {View, StyleSheet, } from 'react-native'
import Spacer from '../components/Spacer'
import {Text, } from 'react-native-elements'

const TrackDetailScreen = () =>{
    return(
        <View style={styles.container}>
            <Spacer>
                <Text h2>Hello TrackDetail</Text>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom:420,
    },
})


export default TrackDetailScreen