import styled from 'styled-components';
import {darken} from 'polished';


export const Container = styled.div`
  display: flex;
  padding: 15px;
  width: 62%;


`

export const ProductList = styled.ul`
  margin-top: 40px;


  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  list-style: none;
  
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

    p {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px
      
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