import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function itemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake         //if cake props was passed in 
     ? state.cake.numOfCakes // we access state.numOfCake
     : state.iceCream.numOfCakes    // if not we access state.iceCream.numOfIceCream

     return {
        item: itemState
     }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(itemContainer)
