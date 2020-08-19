import styled from "styled-components";




// CONTAINER

export const Container = styled.div`  
    
    width:1200px;
    height:600px;
    display:flex;
    flex-direction:row;
    margin: auto;
    border: 1px solid #000000;
`;
export const Nav = styled.nav` 
   width:30%;
   height:600px;
   background-image: linear-gradient(to top, #025D95 ,#02998C );
   display:inline-block;
   color:white;
`;


export const Middle = styled.div` 
    width:100%;  
`;
export const Parag = styled.p` 
    text-align:center;
    
`;



//EVERYTHING ABOUT FORM 

export const Hlogin = styled.p` 
  font-size: 50px;
  margin: 15px auto;
  color:black;
`;

export const Formu = styled.form` 
    
    max-width: 380px;
    margin: 90px auto   ;
    padding: 30px;
    background: #ffffff;
    color:grey;
    border: 1px solid #DDD;
    display:flex;
    box-shadow: 3px 3px 2px grey;
    border-radius: 15px;

    input{
    margin-bottom: 15px;
    height: 40px;
    width:340px;
    border-radius: 4px;
    border: 1px solid #DDD;
    padding: 0 20px;
    font-size: 14px;
    
    };

a {
    color:grey;
    }

`;





export const Botao = styled.button`
    
    width:382px; 
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 4px;
    background-image: linear-gradient(to right, #025D95 ,#02998C ); 
    color: #fff;
    font-size: 18px;
    cursor: pointer; 
    
`;




