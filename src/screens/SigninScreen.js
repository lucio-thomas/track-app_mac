import React, { useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import AuthForm from '../components/AuthForm'
import {NavigationEvents} from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'


const SigninScreen = ({navigation}) =>{
    const {state, signin, clearErrMssg} = useContext(AuthContext)
    
    return(
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrMssg}/>

            <AuthForm
            headerTxt="Sign In to your Account"
            errMssg ={state.errMssg}
            submitTitle="Sign In"
            onSubmit={({email, password}) => signin({email, password})}
            />

            <NavLink
                routeName='Signup'
                text="Don't have an account? Sign In instead!"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom:250,
    },
})


export default SigninScreen