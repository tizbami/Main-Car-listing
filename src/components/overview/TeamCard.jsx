import PropTypes from 'prop-types'

const TeamCard = ({passUser}) => {
  return (
    <div>
      <h3>Name: {`${passUser.lastName}, `} {passUser.firstName}</h3>
      <h3>Age: {passUser.age}</h3>
      <h3>Email: {passUser.email}</h3>
      <h3>Address: {passUser.address}</h3>

      </div>
  )
}

TeamCard.propTypes = {
  passUser: PropTypes.shape({
    firstName: PropTypes.any,
    lastName: PropTypes.any,
    email: PropTypes.any,
    address: PropTypes.any,
    age: PropTypes.number
  })
}

export default TeamCard