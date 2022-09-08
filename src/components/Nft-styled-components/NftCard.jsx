import React from "react";
import styled from "styled-components";
import Image from "./NftImage";
import nfts from "../../nft";
import NftDes from "./NftDescription";
import NftStats from "./NftStats";
import Credits from "./NftCredits";

const Card = styled.div`
  height: 560px;
  width: 330px;
  background-color: hsl(216, 50%, 16%);
  border-radius: 15px;
  box-shadow: 0 20px 0 20px hsl(218, 54%, 11%);

   @media (min-width: 720px) {
    box-shadow: 0 15px 0 15px hsl(222, 54%, 11%), 0 25px 0 40px hsl(218, 54%, 11%);
   }
`;

function NftCard() {
    return (
        <Card>
            <Image image={nfts.imageSrc} alt={nfts.imageAlt} title={nfts.imageTitle}/>
            {console.log(nfts.imageSrc)}
            <NftDes nftTitle={nfts.nftTitle} description={nfts.nftDes}/>
            <NftStats />
            <Credits creditsImage={nfts.avatarImage} creditsName={nfts.avatarName}/>
        </Card>
    );
}

export default NftCard;