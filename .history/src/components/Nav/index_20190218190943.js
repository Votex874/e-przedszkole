import { Component } from 'react';
import { connect } from 'react-redux'



class Navigation extends Component {
  render() {
    console.log(this.props.links) 
    return (
      1 
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect()(Navigation);