import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchData } from "../actions/index"

class TitleBar extends Component {
    render() {
        return (
            <div>
                <h3>Predicting if income exceeds $50k/year Based on 1994 Census Data</h3>
                <h5>US Adult Census dataset of 48,842 entries from 1994. Prediction is done through simple classification techniques.</h5>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(TitleBar);