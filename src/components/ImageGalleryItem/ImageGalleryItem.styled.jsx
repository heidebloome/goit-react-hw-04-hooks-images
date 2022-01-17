import styled from "styled-components";

export const Item = styled.li`
    margin-bottom: ${props => props.theme.spacing(3)};

    @media(min-width: 480px) {
      margin: 0;
    }
`; 

export const Image = styled.img`
    height: 200px;
`;