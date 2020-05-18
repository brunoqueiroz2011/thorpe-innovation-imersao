import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;  
`

export const Form = styled.div`
  width: 50%;
  margin-bottom: 70px;

`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  margin-top: 50px;

  span{
    color: #138A72;
    margin: 5px 0;
  }

  input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #138A72;
  }

  img {
    width: 20px;
    height: 20px;
    position: relative;
    left: 90%;  
    bottom: 30px;
  }

` 

export const Login = styled.div`
  
  margin-left: 50%;
  margin-top: 30px;
  width: 100%;
  margin-top: 20px;

  button {
    width: 100%;
    background: #138A72;
    border: none;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    padding: 20px;
    border-radius: 30px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }


`
export const LinkRegister = styled.div`
  
  margin-left: 50%;
  margin-top: 30px;

  button {
      background: none;
      border: none;
      cursor: pointer;
    }

    a, button {
    color: #138A72;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
  

    &:hover{
      color: #999;
    } 

    img {
      width: 25px;
      height: 30px;
    }

    span {
      background: #FFF;
      color: #EE6B26;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

`