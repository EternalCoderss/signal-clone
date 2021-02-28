import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                source ={{
                    url:
                    "https://www.flaticon.com/free-icon/user_149071?term=user%20avatar&page=1&position=10&page=1&position=10&related_id=149071&origin=tag"
                }}
            />
             <ListItem.Content>
                 <ListItem.Title style={{ fontWeight: "800" }}>
                     Youtube Chat
                 </ListItem.Title>
             </ListItem.Content>

        </ListItem.Title>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
