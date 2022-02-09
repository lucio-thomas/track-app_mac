import React from 'react'
import {View, StyleSheet, } from 'react-native'
import Spacer from '../components/Spacer'
import {Text, Button, } from 'react-native-elements'


const TrackListScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Spacer>
                <Text h2>Hello TrackList</Text>
            </Spacer>

            <Spacer>
                <Button title='Go to track detail' 
                onPress={() => {navigation.navigate('TrackDetail')}}
                />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom:330,
    },
})


export default TrackListScreen