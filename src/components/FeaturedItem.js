import React from "react";
import { connect } from "react-redux"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import imageSelector from "../store/configureStore";



const FeaturedItem = (props) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        largerDesktop: {
            breakpoint: { max: 3000, min: 2500 },
            items: 7
        },
        largeDesktop: {
            breakpoint: { max: 2500, min: 2000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 5
        },
        smallerDesktop: {
            breakpoint: { max: 1024, min: 750 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 750, min: 650 },
            items: 3
        },
        largerMobile: {
            breakpoint: { max: 650, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };


    // if (Object.keys(props.products).length === 0) {
    //     return null
    // }
    // if (props.products.length === 0) return null;

    // let product1 = props.products[0]  // CanonE06
    // let product2 = props.products[6]  //NikonD850
    // let product3 = props.products[21] //LeicaM10
    // let product4 = props.products[17] //FFT4
    // let product5 = props.products[10] //Sonya7
    // let product6 = props.products[1]  //CanonE05
    // let product7 = props.products[12] //Olympus
    // let product8 = props.products[7] //NikonD750


    // console.log(props.products)


    // Name can be a linked to product page
    return (
        <Carousel className="featured__carousel" responsive={responsive} infinite>
            <a className="featured__item" href=''><img className="featured__item--img" src='https://stockx.imgix.net/products/streetwear/Supreme-x-Louis-Vuitton-Box-Logo-Hooded-Sweatshirt-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1553700708&w=1000' alt="featured-item" />
            </a>
            <a className="featured__item" href=''><img className="featured__item--img" src='https://stockx.imgix.net/products/streetwear/Supreme-Motion-Logo-Tee-SS20-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1593723864&w=1000' alt="featured-item" />
            </a>
            <a className="featured__item" href=''><img className="featured__item--img" src='https://stockx.imgix.net/products/streetwear/Supreme-Comme-Des-Garcons-SHIRT-Box-Logo-Tee-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538082009&w=1000' alt="featured-item" />
            </a>
            <a className="featured__item" href=''><img className="featured__item--img" src='https://stockx.imgix.net/products/streetwear/Supreme-Comme-Des-Garcons-SHIRT-Box-Logo-Tee-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538082009&w=1000' alt="featured-item" />
            </a>
            <a className="featured__item" href=''><img className="featured__item--img" src='https://stockx.imgix.net/products/streetwear/Supreme-Comme-Des-Garcons-SHIRT-Box-Logo-Tee-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538082009&w=1000' alt="featured-item" />
            </a>
            <a className="featured__item" href=''><img className="featured__item--img" src='https://stockx.imgix.net/products/streetwear/Supreme-Box-Logo-Crewneck-FW18-Ash-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1544119130' alt="featured-item" />
            </a>
            <a className="featured__item" href=''><img className="featured__item--img" src='https://stockx.imgix.net/products/streetwear/Supreme-Swarovski-Box-Logo-Hooded-Sweatshirt-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1556201863' alt="featured-item" />
            </a>
            <a className="featured__item" href=''><img className="featured__item--img" src='https://stockx.imgix.net/products/streetwear/Supreme-Swarovski-Box-Logo-Hooded-Sweatshirt-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1556201863' alt="featured-item" />
            </a>
        </Carousel >
    );
}


// const mapStateToProps = state => {
//     return {
//         // products: state.session.products
//         products: Object.values(state.products)
//     }
// }


export default connect(
    // mapStateToProps
)(
    FeaturedItem
);
