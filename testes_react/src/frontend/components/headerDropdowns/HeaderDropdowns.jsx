import React, { Component } from 'react'
import MessageCentral from '../messageCentral/MessageCentral'
import ConfigsCentral from '../configsCentral/configsCentral'
import UserDropdown from '../userDropdown/UserDropdown'


class HeaderDropdowns extends Component {

    render() {
        if(this.props.dropdown === 'notifications') {
            return <MessageCentral></MessageCentral>
        } else if(this.props.dropdown ===  'configs') {
            return <ConfigsCentral></ConfigsCentral>
        } else if(this.props.dropdown ===  'users') {
            return <UserDropdown></UserDropdown>
        } else {
            return null
        }
    }
}

export default HeaderDropdowns