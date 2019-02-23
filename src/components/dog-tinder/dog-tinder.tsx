import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../state';
import { connect } from 'react-redux';
import { red } from '@material-ui/core/colors';
import { AddDog } from '../../state/dog/actions';
import { Dog, DogActions } from '../../state/dog/types';
import * as React from 'react';


const divStyle = {
  position: 'relative' as 'relative'
};
const divStyle2 = {
  position: 'relative' as 'relative'

};

const Imgbutton1 = {
  width: '50px',
  height: '50px',

};

const Imgbutton2 = {
  width: '50px',
  height: '50px',
  marginLeft: '150px'
};

const pic = {
  height: '250px',
  background: 'transparent no-repeat center',
  backgroundSize: 'cover'
};



interface Props {addDog: any, getDog: any}
interface State {}
class DogTinderComponent extends React.PureComponent<Props, State> {
  state: any

  constructor(props: Props) {
    super(props);
    this.state = {
      photoURL: '',
      loading: true
    }
  }  
  

  like = (status: boolean) => {
    this.setState({
      ...this.state,
      loading: true
    })

    this.props.addDog({
      photoLink: this.state.photoURL,
      status: status
    });

    this.getNewDog();
  }
  
  componentDidMount () {
    this.getNewDog();
  }

    getNewDog = () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json().then(
          (res) => {
            console.log(res)
            this.setState({
              photoURL: res.message,
              loading: false
            })
          }
        ))
    }

    render () {
      console.log(this.props);
        return (
          <div style={divStyle}>
          {this.state.loading ? 
            <h2>Loading...</h2> :
            <img style={pic} src={this.state.photoURL}></img>

        }
            <div style={divStyle2}>
            <img src='like.svg' style={Imgbutton1} onClick={() => this.like(true)}/>
            <img src='unlike.svg' style={Imgbutton2} onClick={() => this.like(false)}/>
            </div>
          </div>
        )
    }


}

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
      addDog: (dog: Dog) => {
        dispatch({
          type: DogActions.ADD_DOG,
          payload: {
            dog: dog
          }
        })
        }
    };
};

// export default DogTinderComponent;
const mapStateToProps = (state: AppState): any => {
  return {
    dogs: state.DogTinder,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DogTinderComponent);
