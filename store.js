/**
 * Our app store is defined here
 *
 * Created June 14th, 2016
 * @author: ywarezk | nerdeez.com
 * @version: 1.0
 * @copyright: nerdeez.com
 */


store = Redux.applyMiddleware(ReduxThunk.default)(Redux.createStore)(reducer);

console.log(store.getState());