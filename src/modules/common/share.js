import React from 'react'
import "../../assests/share.css"
import { Container, Row, Col } from 'react-grid-system';

function Share() {
  return (
    <div className='share-div'>
    <Container>
      <Row>
      <Col  className='count'>
          <p className='text-center'>60</p>
          <p>Share</p>
        </Col>
        <Col className='facebook bg-fb'>
            <a href="https://peing.net/ja/">
          <img src="https://platform-cdn.sharethis.com/img/facebook.svg" ></img></a>
        </Col>
        <Col className='facebook bg-twitter'>
  <img src="https://platform-cdn.sharethis.com/img/twitter.svg" />
        </Col>
        <Col className='facebook bg-linkedin'>
          <img src="	https://platform-cdn.sharethis.com/img/linkedin.svg" />
        </Col>
        <Col className='facebook bg-whatsapp'>
          <img src="https://platform-cdn.sharethis.com/img/whatsapp.svg" />
        </Col>
        <Col className='facebook bg-share'>
         <img src='https://platform-cdn.sharethis.com/img/sharethis.svg' />
        </Col>

      </Row>
    </Container></div>
  )
}

export default Share