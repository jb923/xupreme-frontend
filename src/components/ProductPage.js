import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import ReviewDiv from "./ReviewDiv";
import Header from "./Header";
import NavUpper from "./NavUpper";
import NavLower from "./NavLower";
import { fetchReviews } from "../actions/reviewActions";
import { addToCart } from "../actions/cartActions";
// import { fetchTransaction } from "../actions/transactionActions";


const ProductPage = (props) => {
    let id = Number(props.match.params.productId);
    const [selectedSize, setSelectedSize] = useState()    
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            await props.fetchReviews(id);
        })();
    }, [id]);

    const Alert = props => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    let sizes = props.sizes
    let product = props.products[id];

    if (!product) return null;
    if (!sizes) return null;

    let { description, imgurl, name, price, color } = props.products[id];

    const handleSubmit = event => {
        event.preventDefault();
        props.addToCart({product: product.id, size: selectedSize});
        setMessage("Added to cart");
        setOpen(true);
        return;
    }

    const handleChange = (event) => {
        event.preventDefault();
        setSelectedSize(event.target.value)
    }

    const handleKeepShopping = () => {
        props.history.push('/all')
    }

    let selectField;
    if (sizes[id]) {
        selectField = (
            <label className="products__label">size: 
                <select className="products__size" placeholder="size"  onChange={handleChange}> 
                    <option value="">select size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Xlarge</option>
                </select>
            </label>
        )} 
    
    
    return (
        <>
            <Header />
            <NavUpper />
            <div className="products__main">
                <div className="products__main-container">
                    <div className="products__img">
                        <img src={imgurl} alt={`${product.name}`} />
                    </div>
                    <div className="products__container-inner">
                        <div className="products__name">{name}</div>
                        <div className="products__color">{color}</div>
                        <div className="products__details">{description}</div>
                        <div className="products__price">${(price / 100)}</div>
                        <form className="products__cart-container" onSubmit={handleSubmit}> 
                            {selectField}
                            <div className="products__buttons">
                                <button className="products__shopping" onClick={handleKeepShopping}>keep shopping</button>
                                <button className="products__cart">add to cart</button>
                            </div>
                        </form>
                    </div>
                </div>
              

            </div>
            <NavLower />
            <Snackbar
                className="snackbar"
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }>
                <Alert onClose={handleClose} severity="success">{message}</Alert>
            </Snackbar>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        reviews: state.reviews,
        sizes: state.sizes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: (id) => dispatch(fetchReviews(id)),
        addToCart: (productId) => dispatch(addToCart(productId)),
        // removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);