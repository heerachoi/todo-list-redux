import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TodoContainer = styled.section`
  /* border: 4px solid #8385f6; */
  border-radius: 12px;
  padding: 0px 25px;
  width: 373px;
  height: 220px;
  margin: 20px;
  background-color: #d2d3fb;
`;

export const TodoTitle = styled.h2`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 30px;
  display: inline-block;
  width: 380px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TodoContext = styled.div`
  font-size: 20px;
  height: 35px;
  margin-bottom: 17px;
  display: inline-block;
  width: 380px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TodoListButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const DetailsButton = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 18px;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: 3px solid red;
  /* padding: 1px 2px; */
  border-radius: 15px;
  font-size: 16px;
  width: 80px;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
  /* font-weight: 600; */
`;

export const DoneButton = styled.button`
  background-color: transparent;
  border: 3px solid green;
  padding: 5px 4px;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  /* font-weight: 600; */
  width: 80px;
  &:hover {
    background: #fff;
  }
`;
