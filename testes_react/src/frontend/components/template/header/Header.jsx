import React from 'react'
import StyledHeader from './styles'

import UserConfig from '../../userConfig/UserConfig'
import ContentConfig from '../../contentConfig/ContentConfig'

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <ContentConfig></ContentConfig>
                <UserConfig></UserConfig>
            </StyledHeader>
        )
    }
}

export default Header