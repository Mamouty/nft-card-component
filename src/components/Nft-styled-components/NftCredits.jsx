import styled from "styled-components";

const Line = styled.div`
    height: 2px;
    width: 285px;
    margin: auto;
    background-color: hsl(215, 32%, 27%);
`;

const Footer = styled.footer`
  width: 285px;
  margin: auto;
  display: flex;

  img {
    width: 30px;
    border-radius: 100%;
    border: 0.1rem solid;
    margin: 20px 0;
  }

  p {
    margin: auto 10px;
    color: hsl(215, 51%, 70%);
  }

  span {
    color: white;
    cursor: pointer;
    transition: 0.75s;

    &:hover {
      color: hsl(178, 100%, 50%);
    }
  }
`;

function Credits(props) {
    return(
        <>
            <Line />
            <Footer>
                <img src={props.creditsImage} alt="Avatar profile"></img>
                <p>Creation of <span>{props.creditsName}</span></p>
            </Footer>
        </>

    );
}

export default Credits;