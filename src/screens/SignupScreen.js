import React, { useContext,} from 'react'
import {View, StyleSheet} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'


const SignupScreen = ({navigation}) =>{   

    const {state, signup, clearErrMssg} = useContext(AuthContext)
    



    return(
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrMssg}/>
            
            <AuthForm
                headerTxt="Sign Up For Tracker"
                errMssg ={state.errMssg}
                submitTitle="Sign Up"
                onSubmit={({email, password}) => signup({email, password})}
            />

            <NavLink
                routeName='Signin'
                text="Already have an account? Sign In instead!"
            />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
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


export default SignupScreen