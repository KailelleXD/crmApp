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

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    onButtonPress() {
        console.log("button has been clicked!");
        console.log(`username: ${this.state.username}`)
        console.log(`password: ${this.state.password}`)
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
                                    this.setState({
                                        username: username
                                    }, () => {
                                        console.log(this.state.username);
                                    });
                                }}
                            />
                        </Item>
                        <Item last>
                            <Input
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={password => {
                                    this.setState({
                                        password: password
                                    }, () => {
                                        console.log(this.state.password);
                                    });
                                }}
                            />
                        </Item>
                        <Button
                            rounded
                            style={styles.buttonStyle}
                            onPress={this.onButtonPress.bind(this)}
                        >
                            <Text
                                style={[
                                    styles.buttonTextStyle,
                                    this.props.textColor
                                ]}
                            >
                                Login
                            </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        aspectRatio: 1.6 / 1,
        backgroundColor: "#FFFFF0",
        margin: "5%",
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 27
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
        justifyContent: "flex-end",
        marginTop: "5%",
    },
    buttonTextStyle: {
        fontWeight: "bold",
        padding: "5%"
    }
});
