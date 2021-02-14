import React, { Component }  from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const SideBar = () => (
    <>
        <List disablePadding dense>
            <ListItem button>
            <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button>
            <ListItemText>Billing</ListItemText>
            </ListItem>
            <ListItem button>
            <ListItemText>Settings</ListItemText>
            </ListItem>
        </List>
    </>
)   

export default SideBar;
