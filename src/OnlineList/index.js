import React, { Component } from 'react'
import {
  ListView,
  ListViewSection,
  ListViewRow,
  Text
} from 'react-desktop/macOs'

export default class OnlineList extends Component {

  renderItem(name, id, status) {
    return (
      <ListViewRow key={id}>
        <div
          className="online-list-item"
          style={{
            background: status === 'online' ? '#6BD761' : 'gray'
          }}
        />
        <Text color="#414141" size="13">
          {name}{' '}
        </Text>{' '}
      </ListViewRow>
    )
  }

  render() {
    return (
      <ListView className="online-list" >
        <ListViewSection>
          {this.props.users && 
            this.props.users.map((user, index) => {
              if (user.id === this.props.currentUser.id) {
                return this.renderItem(
                  `${user.name} (You)`,
                  user.id,
                  user.presence.state
                )
              }
              return this.renderItem(user.name, user.id, user.presence.state)
            })
          }
        </ListViewSection>
      </ListView>
    )
  }
}