import { Component } from 'react';
import { connect } from 'react-redux'



class Navigation extends Component {
  render() {
    console.log(this.props) 
    return (
      
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect(mapStateToProps)(Navigation);