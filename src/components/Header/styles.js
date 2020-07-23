import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: 80%;
  height: 80px;
  margin: 30px auto;

  padding: 0px 20px;

  border-radius: 40px;

  background: #ff2400;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40%;
    background: white;
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

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  transform: opacity 0.2s;

  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      font-size: 18px;
      display: block;
      color: #fff;
    }

    span {
      color: #c4c4c4;
    }
  }
`
