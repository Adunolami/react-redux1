import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (     //return if usersData loading 
    <h2>Loading</h2>    //if users data is not loading meaning the api request is completed we check if there was an error
  ) : userData.error ? (    //if error render error message 
    <h2>{userData.error}</h2>
  ) : (         //if errors are not found we successfully fetch the list of users
    <div>
      <h2> User List</h2>
      <div>
        {userData &&
         userData.users && 
         userData.users.map(user => <p>{user.name}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  } 
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserContainer)
