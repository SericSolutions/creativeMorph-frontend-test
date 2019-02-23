import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../state';
import { connect } from 'react-redux';
import { red } from '@material-ui/core/colors';
import { AddDog } from '../../state/dog/actions';
import { Dog, DogActions } from '../../state/dog/types';
import * as React from 'react';


const border = {
  border: '1px solid black',
  margin: 'auto',
  width: '50%'
};


interface Props {addDog: any, dogs: any}
interface State {}
class DogTinderListComponent extends React.PureComponent<Props, State> {
  state: any
  
  constructor(props: Props) {
    super(props);
    this.state = {
      start: 0
    }
  }

  prev = () => {
    this.setState({
      start: this.state.start - 5
    })
  }

  next = () => {
    this.setState({
      start: this.state.start + 5
    })
  }
  

    render () {
      return (
        <div>
          <h1>Tinder List works</h1>

          <table style={border}>
  <thead>
    <tr style={border}>
      <th style={border}>Pictue</th>
      <th style={border}>Like?</th>
    </tr>
      </thead>
      <tbody style={border}>
        {this.props.dogs.history.slice(this.state.start, this.state.start + 5).map(
          (val: Dog) => {
            return (
              <tr style={border} key={val.photoLink}>
              <td style={border}>{val.photoLink}</td>
              <td style={border}>{val.status ? "LIKED" : "DISLIKED"}</td>
            </tr>    
            )
          }
        )}
      </tbody>
    </table>
    <button onClick={this.prev} disabled={this.state.start <= 0}>Prev</button>
    {console.log((this.props.dogs.history.length - (this.state.start + 5) ) < 1)}
    <button onClick={this.next} 
    disabled={(this.props.dogs.history.length - (this.state.start + 5)) < 1}>
    Next</button>
        </div>
        ) 
    }
}

const mapStateToProps = (state: AppState): any => {
  return {
    dogs: state.DogTinder,
  };
};

export default connect(
  mapStateToProps,
  null,
)(DogTinderListComponent);
