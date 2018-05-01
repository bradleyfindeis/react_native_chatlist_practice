import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { List, ListItem, } from 'react-native-elements';
import { users } from './datasource/data'
class ChatList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <List>
          {users.map((user) => 
            <TouchableOpacity>
              <ListItem 
                key={user.login.username}
                roundAvatar
                avatar={{uri: user.picture.thumbnail }}
                title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                subtitle={user.email}
              />  
            </TouchableOpacity>
          )}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

ChatList.defaultProps = { ...users }
export default ChatList;
