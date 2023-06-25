import React, { useState } from 'react'
import styled from 'styled-components';

const MyImage = ({images = [{url:""}]}) => {
    const [mainImage, setMainImage] = useState(images[0]);
  return (
    <Wrapper>
        <div className='grid grid-four-column'>
            {
                images?.map((image, i)=>{
                    return (
                        <figure key={i}>
                            <img src={image.url}
                            alt={image.filename}
                            className={mainImage===image ? "box-image--style" : null}
                            onClick={()=>setMainImage(image)}
                            />
                        </figure>
                    )
                })
            }
        </div>
        <div className='main-screen'>
            <img src={mainImage.url} alt={mainImage.filename} />
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 2rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width:100%;
      max-height:100%;
      background-size: cover;
      object-fit: contain;
      border-radius: .5rem;
      cursor: pointer;
      /* box-shadow: ${({ theme }) => theme.colors.shadow}; */
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      border-radius: .5rem;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .box-image--style{
    padding: .2rem;
    border: .3rem outset rgb(10, 20, 53);
    border-radius: .5rem;
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default MyImage