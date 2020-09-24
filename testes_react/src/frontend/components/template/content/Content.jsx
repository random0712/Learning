import React from 'react'
import StyledContent from './styles'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../../../routes'

class Content extends React.Component {
    render() {
        return (
            <StyledContent>
                <BrowserRouter>
                    <Routes></Routes>
                </BrowserRouter>
            </StyledContent>
        )
    }
}

export default Content

