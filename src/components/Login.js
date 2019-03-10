import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import {
    Container,
    Header,
    Button,
    Content,
    Form,
    Item,
    Input
} from "native-base";
import firebase from "firebase";
import Loader from "./Loader";

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
            return styles.noError;
        } else {
            return styles.withError;
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.headerStyle}>
                    <Text style={[this.props.textSize, this.props.textColor]}>
                        {this.props.title}
                    </Text>
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input
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

const styles = StyleSheet.create({
    container: {
        width: "100%",
        aspectRatio: 1.5 / 1,
        backgroundColor: "#FFFFF0",
        margin: "5%",
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 27
    },
    noError: {
        marginTop: "8%",
    },
    withError: {
        marginTop: "4.5%",
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
