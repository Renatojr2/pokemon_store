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

width: 630px;


border-radius: 4px;
margin-top: 60px;

@media (max-width: 1085px) {
  position: relative;
  top: 0;
  left: 0;
 
  width: 100%;
  height: 400px ;
  
  }

footer {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    margin-top: 40px;
  }

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

    @media (max-width: 450px) {
    padding: 6px 14px;
    font-size: 8px;

  }

  }
}

`;

export const Header = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: 18px;
    color: #00b341;
  }
  @media (max-width: 450px) {
    padding: 5px;
  
  }


`;

export const ProductCart = styled.table`

thead {
  @media (max-width: 450px) {
    position: absolute;
    top: 50px;
    left: -8px;
    
  }
}

thead th {
  padding: 9px;
  text-align: center;
  color: #101010;


  @media (max-width: 1085px) {
  padding: 8px;
  width: 30%;
  
  }

  @media (max-width: 450px) {
  margin-bottom: 30px;
  width: 5%;
  padding-right: 26px ;


  
  }


}

tbody td.nameGroup {
  @media (max-width: 450px) {
    display: none;
  
  }
}


tbody td {
  padding: 9px;
  border-bottom: 1px solid #ccc;
  

}


img {
  width: 80px;

  @media (max-width: 450px) {
    max-width: 30px;
    height: 40px;
  
  }

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

  @media (max-width: 450px) {
    font-size: 14px;
  }
}

div {
  display: flex;
  align-items: center;

  input {
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #333;
    padding: 2px;
    width: 40px;
    text-align: center;
    @media (max-width: 450px) {
    width: 30px;
  }
    
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
    @media (max-width: 450px) {
    font-size: 20px;
    margin-left: 4px;
  }
  }
`;

