/**
 * Prints hello world on the screen
 *
 * Created June 8th, 2016
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez.com
 */


class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.searchSubmitted = this.searchSubmitted.bind(this);
  }


  searchSubmitted(event) {
    let searchString = this.refs.searchString.value;
    alert(searchString);
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.searchSubmitted}>
          <input type="text" ref="searchString" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <SearchForm />
  </ReactRedux.Provider>,
  document.getElementById('example')
);
