import styled from "styled-components";


const Description = styled.div`
    width: 290px;
    margin: auto;

    h2 {
  margin: 10px auto 10px;
  color: white;
  cursor: pointer;
  transition: 0.75s;
  
  &:hover {
    color: hsl(178, 100%, 50%);
  }



}
p {
  font-size: 18px;
  color: hsl(215, 51%, 70%);
}
`;

function NftDes(props) {
    return (
        <Description>
            <h2>{props.nftTitle}</h2>
            <p>{props.description}</p>
        </Description>
    );
}

export default NftDes;