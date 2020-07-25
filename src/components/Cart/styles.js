import styled from 'styled-components';
import {darken} from 'polished';


export const Container = styled.section`
overflow: scroll;
position: fixed;
right: 10px;
bottom: 40px;
top: 135px;  
padding: 20px;
background: #fff;

width: 500px;

border-radius: 4px;
margin-top: 60px;
>div {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: 18px;
    color: #00b341;
  }
}


footer {
  margin-top: 20px;
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

thead th {
  padding: 9px;
  text-align: center;
  color: #101010;

}
tbody {
  
}

tbody td {
  padding: 9px;
  border-bottom: 1px solid #ccc;
}

img {
  width: 80px;
}

strong {
  color: #333;
  display: block;
}
span {
  display: block;
  margin-top: 4px;

  font-size: 18px;
  font-weight: bold;
}

div {
  display: flex;
  align-items: center;

  input {
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #333;
    padding: 4px;
    width: 40px;
    text-align: center;
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
    font-size: 26px;
    margin-left: 6px;
  }
`;

