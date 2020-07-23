import styled from 'styled-components';
import {darken} from 'polished';


export const Container = styled.section`
width: 70%;
padding: 30px;
background: #fff;

border-radius: 4px;
margin: 40px auto 20px;


footer {
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #00b341;
    color: #fff;

    border: 0;
    border-radius: 4px;

    padding: 10px 20px;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      background: ${darken(0.04, '#00b341')}
    }

  }
}

`;

export const ProductCart = styled.table`
width: 100%;

thead th {
  padding: 12px;
  text-align: left;
  color: #101010;
}

tbody td {
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

img {
  width: 100px;
}

strong {
  color: #333;
  display: block;
}
span {
  display: block;
  margin-top: 5px;

  font-size: 20px;
  font-weight: bold;
}

div {
  display: flex;
  align-items: center;

  input {
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #333;
    padding: 5px;
    width: 50px;
  }

}
  button {
    border: none;
    background: none;
    padding: 6px;
  }

`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #333;
    font-weight: bold;

  }

  strong {
    font-size: 28px;
    margin-left: 6px;
  }
`;