import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'


function iceCreamContainer(props) {
  return (
    <div>
      <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}> BUY ICECREAM</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(iceCreamContainer)
