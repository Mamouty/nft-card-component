import styled from "styled-components";
import NftCard from "./Nft-styled-components/NftCard";

const Section = styled.section`
  height: 100vh;
  background-color: hsl(217, 54%, 11%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Nft() {
    return (
        <Section>
         <NftCard />
        </Section>
    );
}

export default Nft;