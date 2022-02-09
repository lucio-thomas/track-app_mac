import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import Spacer from '../components/Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({navigation, text, routeName}) => {
    return(
        <View>
             <Spacer>
                <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                    <Text style={styles.link}>{text}</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    link:{
        color:'blue',
        fontSize:16,
    }
})

export default withNavigation(NavLink)