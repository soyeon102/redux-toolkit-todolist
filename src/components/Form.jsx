import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';
import styled from 'styled-components';

const Form = () => {
  let nextId = useRef(0);
  const dispatch = useDispatch();

  const [todoData, setTodoData] = useState({
    id: nextId.current,
    title: '',
    comment: '',
    isDone: false,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTodoData({ ...todoData, [name]: value });
  };

  const handleClickAdd = () => {
    dispatch(addTodo(todoData));
    setTodoData((prev) => {
      return {
        ...prev,
        id: (nextId.current += 1),
        title: '',
        comment: '',
      };
    });
  };

  return (
    <Container>
      <TextArea>
        <InputArea>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={todoData.title}
            onChange={handleInput}
          />
        </InputArea>
        <InputArea>
          <input
            type='text'
            placeholder='Content'
            name='comment'
            value={todoData.comment}
            onChange={handleInput}
          />
        </InputArea>
      </TextArea>
      <ButtonArea>
        <button onClick={handleClickAdd}>+</button>
      </ButtonArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 3px 3px 8px gray;
  color: white;
  padding: 20px;
`;

const TextArea = styled.div``;

const InputArea = styled.div`
  width: 400px;
  margin-right: 20px;

  & + & {
    margin-top: 14px;
  }

  input {
    margin-left: 4px;
    border-radius: 6px;
    width: 100%;
    height: 40px;
    padding: 4px 10px;
    border: 1px solid gray;
    outline: none;
    box-sizing: border-box;
    background-color: transparent;
  }
`;

const ButtonArea = styled.div`
  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid gray;
    cursor: pointer;
    font-size: 30px;

    &:hover {
      background-color: #f6f6f6;
    }
  }
`;

export default Form;
