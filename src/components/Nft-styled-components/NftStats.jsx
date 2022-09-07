import styled from "styled-components";

const Stats = styled.div`
  margin: 20px;
  width: 285px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }

  svg, H4 {
    display: inline-flex;
    margin: auto 3px;
    font-weight: 500;
  }
`;

const H4 = styled.h4`
    color: ${props => props.ethereum ? "hsl(178, 100%, 50%)" : "hsl(215, 51%, 70%)"};
`;

function NftStats() {
    return(
        <Stats>
            <div>
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
                <H4 ethereum>0.041 ETH</H4>
            </div>
            <div>
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
                <H4>3 days left</H4>  
            </div>
        </Stats>
    );

}

export default NftStats;