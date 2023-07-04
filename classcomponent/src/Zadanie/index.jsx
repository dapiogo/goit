import React, { Component } from 'react'

class Zadanie extends Component {

    state = {
        good: 0,
        bad: 0
    }

    countPositiveFeedbackPercentage = () => {
        const allOpinion = this.state.good + this.state.bad;

        return allOpinion ? `${((100 * this.state.good) / allOpinion).toFixed(2)}%` : `0.00%`
    }

    addStats = (option) => {
        this.setState((prevState) =>
            ({ ...prevState, [option]: prevState[option] + 1 }))
    }

    render() {
        return (
            <div>
                <h1>Add feedback</h1>
                <button onClick={() => this.addStats('good')}>Good</button>
                <button onClick={() => this.addStats('bad')}>Bad</button>
                <h1>Stats</h1>
                <div>Good: {this.state.good}</div>
                <div>Bad: {this.state.bad}</div>
                <div>Positive feedback: {this.countPositiveFeedbackPercentage()} </div>
            </div>
        )
    }
}

export default Zadanie;