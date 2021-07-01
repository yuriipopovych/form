import React, { Component } from 'react'

export default class TryProp extends Component {
    render() {
        return (
            <div>
                {this.props.cont[0].id}
            </div>
        )
    }
}
