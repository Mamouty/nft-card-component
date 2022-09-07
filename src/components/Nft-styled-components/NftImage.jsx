import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 290px;
  height: 290px;
  margin: 20px 20px;
  border-radius: 10px;

  img {
    height: 100%;
    border-radius: 10px;
  }

  div {
    position: absolute;
    top: 0;
    background-color: rgba(0, 255, 246, 0);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;

    &:hover {
      background-color: rgba(0, 255, 246, 0.4);

      i {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0);
    transform: translate(-50%, -50%);
    transition: 1s ease-in-out;
  }
`;

function NftImage(props) {
    return (
        <ImageContainer>
          <img src={props.image} alt={props.alt}/>
          <div>
            <a href="#" title={props.title}>
                <i class="fa-solid fa-eye"></i>
            </a>
          </div>  
        </ImageContainer>
    );
}

export default NftImage;
