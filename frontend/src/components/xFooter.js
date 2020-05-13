import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  grid-area: footer;
  display: flex;
  background-color: #f9fafc;
`;

class Footer extends Component {
  render() {
    return <FooterContainer />;
  }
}
export default Footer;
