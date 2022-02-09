import React from 'react'
import {View, StyleSheet, } from 'react-native'
import {Text, } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import Map from '../components/Map'

const TrackCreateScreen = () =>{
    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Spacer>
                <Text h2>Create a Track</Text>
            </Spacer>
            
            <Spacer/>
            
            <Map/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default TrackCreateScreen