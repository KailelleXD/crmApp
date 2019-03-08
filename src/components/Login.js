import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native'
import {
    MKTextField,
    MKColor,
    MKButton,
} from 'react-native-material-kit';

// HELPER FUNCTIONS ////

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

export default class Login extends Component {
    state = {
        email: '',
        passwword: '',
    }

    onButtonPress() {
        console.log('button has been clicked!')
    }

  render() {

    const { form, fieldStyles, loginButtonArea, errorMessage } = styles;

    return (
      <View>
        <Text> This is Login.js </Text>
        <MKTextField
            text={this.state.email}
            onTextChange={email => this.setState({
                email
            })}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
        />
        <MKTextField
            text={this.state.password}
            onTextChange={password => this.setState({
                password
            })}
            textInputStyle={fieldStyles}
            placeholder={'Password...'}
            tintColor={MKColor.Teal}
            password={true}
        />
        <Text style={errorMessage}>
            {this.state.error}
        </Text>
        <View style={loginButtonArea}>
            <LoginButton onPress={this.onButtonPress.bind(this)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
});

