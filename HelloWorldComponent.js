/**
 * Prints hello world on the screen
 *
 * Created June 8th, 2016
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez.com
 */


class HelloDevGeekWeek extends React.Component {
  render(){
    return (
      <div>{this.props.greeting}</div>
    );
  }
}

ReactDOM.render(
  <HelloDevGeekWeek greeting="Hello!!!!!" />,
  document.getElementById('example')
);
