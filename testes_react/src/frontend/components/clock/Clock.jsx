import React, { Component } from 'react'
import StyledSpan from './styles'

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({date: new Date()})
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }


    render() {
        return (
            <StyledSpan>{this.state.date.toLocaleString('pt-br')}</StyledSpan>
        )
    }
}

export default Clock