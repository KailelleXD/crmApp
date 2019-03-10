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
    state = {
        email: "",
        password: ""
    };

    onButtonPress() {
        console.log("button has been clicked!");
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
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                        <Button rounded style={styles.buttonStyle}>
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
        borderRadius: 27,
    },
    headerStyle: {
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    buttonStyle: {
        width: "95%",
        alignSelf: "center",
        justifyContent: "flex-end",
        marginTop: '5%',
    },
    buttonTextStyle: {
        fontWeight: "bold",
        padding: "5%",
    }
});
