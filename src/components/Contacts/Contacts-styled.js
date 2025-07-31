import { styled } from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  gap: 20px;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export const ListContact = styled.li`
  font-weight: 350px;
  font-size: 17px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RemoveButton = styled.button`
  background-color: rgb(255, 0, 129);
  padding: 5px;
  border: 1px solid black;
  border-radius: 50px;
  color: rgb(255, 255, 255);

  &:hover {
    background-color: rgba(255, 0, 130, 0.5) 0px 2px 25px;
    color: black;
    border: 1px solid rgb(255, 255, 255);
  }
`;
