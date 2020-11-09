import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Separator from "../components/Separator";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

class MessageScreen extends Component {
  state = {
    messages: [
      {
        id: 1,
        title: "siddhant",
        description: "bla bla bla",
        image: require("../assets/mosh.jpg"),
      },
      {
        id: 2,
        title: "Leo ",
        description: "Good dog",
        image: require("../assets/mosh.jpg"),
      },
    ],
    refreshing: false,
    setRefreshing: false,
  };
  handleDelete = (message) => {
    const newMessages = this.state.messages.filter((m) => m.id !== message.id);
    this.setState({ messages: newMessages });
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              showChevrons={true}
              title={item.title}
              subtitle={item.description}
              img={item.image}
              renderRight={() => (
                <ListItemDeleteAction onPress={() => this.handleDelete(item)} />
              )}
              onPress={() => console.log("message Selected", item)}
            />
          )}
          ItemSeparatorComponent={Separator}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({
              messages: [
                {
                  id: 2,
                  title: "Leo",
                  description: "Good dog",
                  image: require("../assets/mosh.jpg"),
                },
              ],
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default MessageScreen;
