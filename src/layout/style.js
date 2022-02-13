import React from 'react'
import { Label } from 'reactstrap';
import styledComponents from "styled-components";
import styled from 'styled-components';

export const HeaderLayout = styled.div`
  background: #FFF0F5 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 10px;
`;

export const Title = styled.span`
font: normal normal 500 36px/41px;
  letter-spacing: 0px;
  color: #D8BFD8;
  opacity: 1;
  text-align:center;
  font-weight: bold;`

export const Headings = styled.h3`
font: normal normal normal 80px/82px;
  letter-spacing: 0px;
  color: #D8BFD8;
  opacity: 1;
  text-align:center;
  font-weight: bold;
`

export const FormLabel = styled(Label)`
font-weight: bold
`