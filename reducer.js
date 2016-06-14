/**
 * Our movie app reducer
 *
 * Created June 11th, 2016
 * @author: ywarezk - nerdeez.com
 * @version: 1.0
 * @copyright: nerdeez.com
 */

/**
 * Movie app initial state
 * @type {{isLoading: boolean, movie: null}}
 */
const initialState = {
  isLoading: false,
  movie: null
};

/**
 * Movie app reducer
 * @param {{isLoading: boolean, movie: null}} state
 * @param {{type: String, payload: Object}} action
 * @returns {{isLoading: boolean, movie: null}}
 */
function reducer(state = initialState, action){
  switch (action.type){
    case 'TOGGLE_LOADING':
      return Object.assign({}, state, {
        isLoading: action.payload
      });
    case 'SET_MOVIE':
      return Object.assign({}, state, {
        movie: action.payload
      });
    default:
      return state;
  }
}


