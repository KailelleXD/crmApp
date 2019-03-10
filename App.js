import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import firebase from "firebase";

import Login from "./src/components/Login";

import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
    $rem: 16,
    $textColor: '#fff'
});

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBt54L9qu7ftgc2x44jrxt734m_C0gofWA",
            authDomain: "crmapp-c3a20.firebaseapp.com",
            databaseURL: "https://crmapp-c3a20.firebaseio.com",
            projectId: "crmapp-c3a20",
            storageBucket: "",
            messagingSenderId: "687056951240"
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Grid>
                    <Row size={0} />
                    <Row size={2}>
                        <Login
                            textSize={eStyles.textSize}
                            textColor={eStyles.textColor}
                            title={"Login or Create Account"}
                        />
                    </Row>
                    <Row size={0} />
                </Grid>
            </View>
        );
    }
}

const eStyles = EStyleSheet.create({
    textSize: {
        fontSize: "1.5rem",
        color: '$textColor',
    },
    textColor: {
      color: '$textColor',
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8FF"
    },
});
