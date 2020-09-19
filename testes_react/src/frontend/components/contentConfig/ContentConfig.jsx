import React from 'react'
import StyledDiv from './styles'

import HeaderTitle from '../headerTitle/HeaderTitle'
import MenuToggle from '../menuToggle/MenuToggle'
import SearchBar from '../searchBar/SearchBar'

const ContentConfig = props => {
    return(
        <StyledDiv>
            <HeaderTitle>Stock System</HeaderTitle>
            <MenuToggle></MenuToggle>
            <SearchBar></SearchBar>
        </StyledDiv>
    )
    
}

export default ContentConfig