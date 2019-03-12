import React, { Component } from 'react'
import { StyleSheet, View, ListView, Dimensions } from 'react-native'
import { Header } from 'native-base';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

const { height, width } = Dimensions.get("window");

class PeopleList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(this.props.people);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ListView 
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <PeopleItem people={rowData} />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    flexWrap: 'wrap',
  }
})

const mapStateToProps = state => {
  return { people: state.people }
}

export default connect(mapStateToProps)(PeopleList);