import React, { memo } from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding: 0 4px;
  }
`

const Footer = memo(() => (
  <StyledFooter>
    <p>© Sean Groff</p>
    <span>{`${new Date().getFullYear()} `}</span>
  </StyledFooter>
))

export default Footer
