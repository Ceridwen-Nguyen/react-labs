import { styled } from "styled-components";

const WapperGallery = styled('div')`
    display: flex;
    flex-wrap: wrap;
`

const WrapperImage = styled('div')`
    margin: 30px;
    img {
        width: 300px;
        height: 300px;
    }
`

function Gallery(props) {
    return(
        <WapperGallery>
            {props.dataImage.map((d) => {
                return (
                    <WrapperImage>
                        <img src={d.image}/>
                    </WrapperImage>
                )
            })}
        </WapperGallery>
    )
}

export default Gallery