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
    this.props.requestMovieFromApi(searchString);
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.searchSubmitted} >
          <input type="text" ref="searchString" />
          <input type="submit" value="Submit" />
        </form>
        {
          (() => {
            if (this.props.isLoading) {
              return (
                <div>
                  <h1>
                    Loading...
                  </h1>
                </div>
              );
            }
          })()
        }
        {
          (() => {
            if (this.props.movie){
              return (
                <div>
                  <h1>
                    <strong>Title: </strong> {this.props.movie.Title}
                  </h1>
                  <p>
                    <strong>Actors: </strong> {this.props.movie.Actors}
                  </p>
                  <p>
                    <strong>IMDB Rating: </strong> {this.props.movie.imdbRating}
                  </p>
                </div>
              );
            }
          })()
        }
      </div>
    );
  }
}

/**
 * which state we want to be transfered to the props of the searchform
 * @param state
 * @returns {{isLoading: (*|boolean), movie: (*|null)}}
 */
function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    movie: state.movie
  }
}

/**
 * which actions i want to transfer to our searchform
 * @param dispatch
 * @returns {{requestMovieFromApi: *}}
 */
function mapDispatchToProps(dispatch) {
  return {
    requestMovieFromApi: Redux.bindActionCreators(action, dispatch)
  }
}

var SearchFormComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SearchForm);


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <SearchFormComponent />
  </ReactRedux.Provider>,
  document.getElementById('example')
);
