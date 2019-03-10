import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import firebase from "firebase";

import Loader from "./src/components/Loader";
import Login from "./src/components/Login";
import PeopleList from "./src/components/PeopleList";

import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
    $rem: 16,
    $textColor: "#fff"
});

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null
        };
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBt54L9qu7ftgc2x44jrxt734m_C0gofWA",
            authDomain: "crmapp-c3a20.firebaseapp.com",
            databaseURL: "https://crmapp-c3a20.firebaseio.com",
            projectId: "crmapp-c3a20",
            storageBucket: "",
            messagingSenderId: "687056951240"
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    loggedIn: true
                });
            } else {
                this.setState({
                    loggedIn: false
                });
            }
        });
    }

    // RENDER FUNCTIONS ////

    renderInitialView() {
        switch (this.state.loggedIn) {
            case true:
                return <PeopleList />;
            case false:
                return (
                    <Login
                        headerSize={eStyles.headerSize}
                        inputSize={eStyles.inputSize}
                        textColor={eStyles.textColor}
                        title={"Login or Create Account"}
                    />
                );
            default:
                return <Loader size="large" />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Grid>
                    <Row size={0} />
                    <Row size={2}>{this.renderInitialView()}</Row>
                    <Row size={0} />
                </Grid>
            </View>
        );
    }
}

const eStyles = EStyleSheet.create({
    headerSize: {
        fontSize: "1.5rem",
        color: "$textColor"
    },
    inputSize: {
        fontSize: "1rem"
    },
    textColor: {
        color: "$textColor"
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8FF"
    }
});
