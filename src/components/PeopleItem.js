import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

import { connect } from "react-redux";
import * as actions from "../actions";

const PersonItem = props => {
    return (
        <Card>
            <CardItem header bordered>
                <Text>
                    {props.people.first_name} {props.people.last_name}
                </Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>{props.people.notes}</Text>
                </Body>
            </CardItem>
            <CardItem footer bordered>
                <Text>{props.people.company}</Text>
            </CardItem>
        </Card>
    );
};

export default connect(
    null,
    actions
)(PersonItem);

const styles = StyleSheet.create({});
