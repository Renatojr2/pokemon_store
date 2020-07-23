import styled from 'styled-components';
import {darken} from 'polished';


export const Container = styled.section`

  max-width: 1100px;
  margin: 0px auto;
`

export const ProductList = styled.ul`
  margin-top: 60px;
  height: 200px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  list-style: none;
  
  li {

    box-shadow: 0 0 10px rgba(0,0,0, .1);
    padding: 20px;
    background: #fff;

    border-radius: 4px;
    
    display: flex;
    flex-direction: column;


    img {
      height: 150px;
    }

    h2 {
      font-size: 26px;
      margin-bottom: 30px
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
      font-size: 18px;
      margin: 5px 0 10px;
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