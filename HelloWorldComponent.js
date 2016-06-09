/**
 * Prints hello world on the screen
 *
 * Created June 8th, 2016
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez.com
 */


class HelloDevGeekWeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isGreetingShown: true};
    this.toggleGreeting = this.toggleGreeting.bind(this);
  }

  toggleGreeting(){
    this.setState({isGreetingShown: !this.state.isGreetingShown});
  }

  render(){
    var msg = 'Hide Greeting';
    if (!this.state.isGreetingShown){
      msg = 'Show Greeting';
    }
    return (
      <div>
        <button onClick={this.toggleGreeting} >
          {msg}
        </button>
        {
          (() => {
            if (this.state.isGreetingShown) {
              return (<div>{this.props.greeting}</div>);
            }
            return null;
          })()
        }
      </div>
    );
  }
}

ReactDOM.render(
  <HelloDevGeekWeek greeting="Hello!!!!!" />,
  document.getElementById('example')
);
