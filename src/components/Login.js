import React, { Component } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import {
    Container,
    Header,
    Button,
    Content,
    Form,
    Item,
    Input
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import firebase from "firebase";
import Loader from "./Loader";

const { height, width } = Dimensions.get("window");

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
            loading: false
        };
    }

    onButtonPress() {
        const { username, password } = this.state;
        this.setState({
            error: "",
            loading: true
        });

        console.log(width);

        setTimeout(() => {
            console.log("timeout!");
            firebase
                .auth()
                .signInWithEmailAndPassword(username, password)
                .then(this.onAuthSuccess.bind(this))
                .catch(() => {
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword(username, password)
                        .then(this.onAuthSuccess.bind(this))
                        .catch(this.onAuthFailed.bind(this));
                });
        }, 3000);
    }

    onAuthSuccess() {
        this.setState({
            username: "",
            password: "",
            error: "",
            loading: false
        });
    }

    onAuthFailed() {
        this.setState({
            error: "Authentication Failed",
            loading: false
        });
    }

    renderLoader() {
        if (this.state.loading) {
            return <Loader size="large" />;
        } else {
            return (
                <Button
                    rounded
                    style={[
                        styles.buttonStyle,
                        this.ifErrorStyle()
                        ]}
                    onPress={this.onButtonPress.bind(this)}
                >
                    <Text
                        style={[styles.buttonTextStyle, this.props.textColor]}
                    >
                        Login
                    </Text>
                </Button>
            );
        }
    }

    // RENDER FUNCTIONS ////

    ifErrorStyle() {
        if (this.state.error === "" || this.state.loading === true) {
            return eStyles.noError;
        } else {
            return eStyles.withError;
        }
    }

    render() {
        return (
            <Container style={[styles.container, eStyles.eContainerStyle]}>
                <Header style={styles.headerStyle}>
                    <Text style={[this.props.headerSize, this.props.textColor]}>
                        {this.props.title}
                    </Text>
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input
                                style={this.props.inputSize}
                                placeholder="Username"
                                onChangeText={username => {
                                    this.setState(
                                        {
                                            username: username
                                        },
                                        () => {
                                            console.log(this.state.username);
                                        }
                                    );
                                }}
                            />
                        </Item>
                        <Item last>
                            <Input
                                style={this.props.inputSize}
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={password => {
                                    this.setState(
                                        {
                                            password: password
                                        },
                                        () => {
                                            console.log(this.state.password);
                                        }
                                    );
                                }}
                            />
                        </Item>
                        <Text style={styles.errorMessage}>
                            {this.state.error}
                        </Text>
                        {this.renderLoader()}
                    </Form>
                </Content>
            </Container>
        );
    }
}

const eStyles = EStyleSheet.create({
    eContainerStyle: {
        width: '100%',
        borderRadius: '0.12 * 15.5rem'
    },
    '@media (min-width: 350)': {
        eContainerStyle: {
            height: '15.5rem',
        },
    },
    '@media (max-width: 350)': {
        eContainerStyle: {
            height: '16rem',
        },
        noError: {
            marginTop: '1.3rem',
        },
        withError: {
            marginTop: '1.3rem',
        },
    },
    noError: {
        marginTop: '1.2rem',
    },
    withError: {
        marginTop: '.8rem',
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFF0",
        margin: "5%",
        borderColor: "#000",
        borderWidth: 2,
    },
    headerStyle: {
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    buttonStyle: {
        width: "95%",
        alignSelf: "center",
        justifyContent: "center",
    },
    buttonTextStyle: {
        fontWeight: "bold",
        width: "100%",
        textAlign: "center"
    },
    errorMessage: {
        color: "#FF0000",
        alignSelf: "center",
        margin: 0
    }
});
