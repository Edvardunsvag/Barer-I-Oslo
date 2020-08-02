import styled from 'styled-components';

const StyledHero = styled.article`
    min-height: calc(60vh);
    background: url('${(props) => props.image}') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledHero;
