import styled from 'styled-components';

export const TodoForm = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eee;
  border-radius: 12px;
  padding: 40px;
  margin: 0 auto;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const TaskInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 50px;
  padding: 0 12px;
  width: 400px;
  font-size: 20px;
`;

export const ButtonAdd = styled.button`
  background-color: #fa6c6e;
  border: none;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  padding: 19px 26px;
  cursor: pointer;
  &:hover {
    background-color: #fb484a;
    scale: 1.1;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.14);
  }
`;
