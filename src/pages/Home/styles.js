import styled from 'styled-components';
import {darken} from 'polished';


export const Container = styled.div`
  display: flex;
  padding: 15px;
  width: 62%;

  @media (max-width: 1085px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;

  }
`;

export const ProductList = styled.ul`
  margin-top: 40px;


  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  list-style: none;

  @media (max-width: 1085px) {
    margin: 0 auto;
    width: 100%;
    margin-top: 50px;
    
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    width: 100%;
    margin-top: 50px;
    
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
  li {

    box-shadow: 0 0 10px rgba(0,0,0, .1);
    padding: 15px;
    background: #fff;

    border-radius: 4px;
    
    display: flex;
    flex-direction: column;


    img {
      height: 90px;
    }

    h2 {
      font-size: 24px;
      margin: 20px
    }


    >strong {
      color: #333;
    }


    > span {
      font-size: 16px;
      margin: 5px 0 15px;
      font-weight: bold;
        
      
    }

    button {
      margin-top: auto;
      background: #00b341;
      border: none;
      border-radius: 4px;
      padding: 10px;

      overflow: hidden;

      display: flex;
      align-items: center;
      transition: opacity .2s;

      &:hover {
        background: ${darken(0.04, '#00b341')}
      }

      div {
        display: flex;
        align-items: center;
       

        padding: 12px;
        color: #fff;
        background: rgba(0,0,0,.1);

        svg {
          margin-right: 5px;
        }

      }
        > span {

          flex: 1;
          text-align: center;
          
          color: #eaeaea;
          margin-left: 5px;
        }
    }
  }

`;

export const HeaderContainer = styled.header`
  width: 80%;
  height: 80px;
  margin: 30px auto;

  padding: 0px 20px;

  border-radius: 40px;

  background: #ff2400;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
    margin: 0;
    border-radius:0;

  }

  img {
    width: 40%;
  }
`

export const Form = styled.form`
  width: 26rem;
  height: 35px;

  display: flex;
  align-items: center;

  position: relative;
  right: 55px;

  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;

    border: none;
    border-radius: 4px;
  }

  svg {
    position: relative;
    top: 2px;
    left: -35px;
  }
`