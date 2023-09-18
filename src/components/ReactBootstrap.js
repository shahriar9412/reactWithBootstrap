import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ReactBootstrap = () => {
  console.log(uuidv4());
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>lorem ipsum lorem lorem lorem lorem</Card.Text>
      <Button>Learn more</Button>
      </Card.Body>
    </Card>
  )
}

export default ReactBootstrap
