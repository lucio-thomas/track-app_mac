import React, {useState, useContext} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from './Spacer'


const AuthForm = ({headerTxt, errMssg, onSubmit, submitTitle}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View>
            <Spacer>
                <Text h2>{headerTxt}</Text>
            </Spacer>

            <Input label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize= "none"
            autoCorrect= {false}
            />

            <Spacer/>

            <Input 
            secureTextEntry
            label="Password" 
            value={password}             
            onChangeText={setPassword}
            autoCapitalize= "none"
            autoCorrect= {false}
            />
            <Spacer>
                {errMssg ? 
                    <Text style={styles.errMssgTxt}>{errMssg}</Text> 
                : null}
            </Spacer>
            <Spacer>
                <Button title={submitTitle} onPress={() => onSubmit({email, password})} />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    errMssgTxt:{
        fontSize: 17,
        fontWeight:'600',
        color: 'red',
        marginLeft: 15
    },
})

 export default AuthForm