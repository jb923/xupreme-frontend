import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const FeaturedItem = (props) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        largerDesktop: {
            breakpoint: { max: 3000, min: 2500 },
            items: 4
        },
        largeDesktop: {
            breakpoint: { max: 2500, min: 2000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 4
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
    if (props.products.length === 0) return null;


    let products = props.products


    const matchedTarget = products.filter(product => {
        return product.new === "new"
    })
   



    return (
        <Carousel className="featured__carousel" responsive={responsive} infinite>
            {matchedTarget.map((product, i) => {
                return (
                    <div className= 'carousel__list' key={i}>
                        <Link className='carousel__list-product' to={`/product/${product.id}`}><img className='carousel__item--img' img src={product.imgurl} alt='carousel-img' /></Link>
                    </div>
                )
            })}
        </Carousel >
    );
}


const mapStateToProps = state => {
    return {
        products: Object.values(state.products)
    }
}


export default connect(
    mapStateToProps
)(
    FeaturedItem
);
