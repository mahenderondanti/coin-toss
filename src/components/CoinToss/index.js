// Write your code here
import {Component} from 'react'

import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResult: headsImage,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let updateHeadsCount = headsCount
    let updateTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImage
      updateHeadsCount += 1
    } else {
      tossImage = tailsImage
      updateTailsCount += 1
    }
    this.setState({
      tossResult: tossImage,
      headsCount: updateHeadsCount,
      tailsCount: updateTailsCount,
    })
  }

  render() {
    const {tossResult, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResult} alt="toss result" className="toss-result-img" />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
