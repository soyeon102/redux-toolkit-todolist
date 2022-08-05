import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import { deleteTodo, toggleTodo } from '../store/slices/todoSlice';

const Todo = ({ item }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { id, title, comment, isDone } = item;

  return (
    <Container
      onClick={() => {
        navigator(`/detail/${id}`);
      }}
    >
      <TodoCard>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardComment>
          <h3>{comment}</h3>
        </CardComment>

        <ButtonGroup>
          <Button
            text='삭제'
            btnColor='red'
            onBtnClick={(e) => {
              e.stopPropagation();
              dispatch(deleteTodo(id));
            }}
          />
          <Button
            text={isDone ? '취소' : '완료'}
            btnColor='green'
            onBtnClick={(e) => {
              e.stopPropagation();
              dispatch(toggleTodo(id));
            }}
          />
        </ButtonGroup>
      </TodoCard>
    </Container>
  );
};

export default Todo;

const Container = styled.li`
  padding: 10px 0;
`;

const TodoCard = styled.div`
  width: 230px;
  padding: 10px 20px;
  border: 2px solid ${(props) => (props.done ? 'green' : 'red')};
  border-radius: 10px;
  /* overflow-wrap:  */
`;

const CardTitle = styled.div`
  h3 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CardComment = styled.div`
  h3 {
    font-size: 14px;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 54px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
