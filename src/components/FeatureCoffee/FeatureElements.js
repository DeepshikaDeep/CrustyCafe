import styled from 'styled-components';
import FeaturePic from '../../images/coffee_banner.jpg';

export const FeatureContainer = styled.div`
background:linear-gradient(to right, rgba(0, 0, 0 , 0.7), rgba(0, 0, 0 , 0.1)), url(${FeaturePic});
background-position:center;
background-size:cover;
height:100vh;
max-height:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#fff;
text-align;center;
padding:0 1rem;

h1{
    font-size: clamp(3rem, 5vw, 5rem);
}
p{
    margin-bottom:1rem;
    font-size:clamp(1rem, 3vw, 2rem);
}
`;

export const FeatureButton = styled.button`
font-size:1.4rem;
padding:0.6rem 3rem;
border:none;
background:#705B47;
color:#fff;
transition:0.2s ease-out;

&:hover{
    color:#000;
    background:#D2C5B3;
    transition:0.2s ease-out;
    cursor:pointer;
}
`;
