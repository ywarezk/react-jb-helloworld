/**
 * Describe the actions and action creators
 * of our movie app
 *
 * Created June 11th, 2016
 * @author: ywarezk - nerdeez.com
 * @version: 1.0
 * @copyright: nerdeez.com
 */

/**
 * When the user clicks the search or server responded we need
 * to toggle the loading
 * @param {Bool} isLoading
 * @returns {{type: string, payload: *}}
 */
function toggleLoading(isLoading) {
  return {
    type: 'TOGGLE_LOADING',
    payload: isLoading
  }
}

/**
 * When we get response from the server we need to set
 * the movie state
 * @param {Object} movie
 * @returns {{type: string, payload: *}}
 */
function setMovie(movie) {
  return {
    type: 'SET_MOVIE',
    payload: movie
  }
}

/**
 * We send the request to the server from this action
 * @param {String} search
 */
action = function requestMovieFromApi(search) {
  return function(dispatch) {
    debugger;
    dispatch(toggleLoading(true));
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        dispatch(setMovie(xmlHttp.responseText));
      }
      dispatch(toggleLoading(false));
    }
    xmlHttp.open("GET", 'http://www.omdbapi.com/?t=' + search + '&y=&plot=short&r=json', true);
    xmlHttp.send(null);
  }
}
