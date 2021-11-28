import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Home () {

  const arr = [];

  const [data, setdata] = useState({
    arr: [],
    id: '',
    value: ''
  });

  const updateInput = e => {
    setdata({
      ...data,
      id: Math.random(),
      value: e.target.value
    });
  };

  const addItem = e => {
    data.value !== '' && data.arr.push({
      id: data.id,
      value: data.value,
      done: false
    });
    setdata({
      ...data,
      value: ''
    });
  };

  const deleteItem = (id,e) => {
    const index = data.arr.findIndex((item) => item.id === id);
    data.arr.splice(index, 1);
    setdata({
      ...data
    });
  };

  const strikeItem = (id,e) => {
    data.arr.forEach((item) => {
      console.log('item-->', item.value, item.id)
      if (item.id === id)item.done = !item.done;
    });
    setdata({
      ...data
    });
  };


  return (
    <Container>
      <h1 className="my-3">To Do list</h1>
      <InputGroup className="mb-3">
        <FormControl placeholder="Type here to add an item.." value={data.value} onChange={updateInput}/>
        <Button variant="success" id="button-addon2" onClick={addItem}>Add Item</Button>
      </InputGroup>
        {
        data.arr.length > 0 && data.arr.map((item) =>
        <InputGroup className="mb-3">
          <InputGroup.Checkbox onChange={strikeItem.bind(this, item.id)} />
          <FormControl style={{'text-decoration': item.done ? 'line-through' : 'none'}} value={item.value}/>
          <Button variant="link" id="button-addon2" onClick={deleteItem.bind(this, item.id)}>Delete</Button>
        </InputGroup>
        )
      }
    </Container>
  )
};