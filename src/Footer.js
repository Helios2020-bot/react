import React from 'react';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
    <footer>{this.props.title}</footer>
    )
}
}
export default Footer;
