import React, {useContext} from 'react'
import {View, StyleSheet, } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import {Text, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'


const AccountScreen = ({navigation}) =>{
    const {signout} = useContext(AuthContext)


    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer>
                <Text h2>Hello Account</Text>
            </Spacer>
            <Spacer>
                <Button title='Sign Out' onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
}


export default AccountScreen