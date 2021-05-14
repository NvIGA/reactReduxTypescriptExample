import * as UsersActions from './usersActions'
import * as TodosActions from './todoActions'

const actions = {
  ...UsersActions,
  ...TodosActions,
}
export default actions
