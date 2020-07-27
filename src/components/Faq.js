import React from "react";
import Header from "./Header";
import NavLower from "./NavLower";


const Faq = (props) => {

    return (
        <>
            <Header/>
            <div className="faq__main">
                <div className="faq__main-container">
                    <p className="faq__heading">F.A.Q.</p>
                    <p className="faq__heading">How much does shipping cost?</p>
                    <p>At this time, we are only accepting orders from residents that live in the U.S.A., Canada and Mexico.</p>
                    <p>All orders are shipped via UPS Ground. The shipping rate to the contiguous 48 U.S. states is 
                        $10. The shipping rate to Alaska, Hawaii and Puerto Rico is $25. Orders for Canada are charged a 
                        flat rate $20 fee for UPS expedited shipping and a Canadian Surcharge to cover all GST, HST, 
                        Duty and Brokerage. Canadian customers will not incur any additional charges upon delivery. 
                        Orders for Mexico are charged a flat rate $35 fee for UPS expedited shipping and a Mexican 
                        Surcharge to cover VAT and Duty. Mexican customers will not incur any additional charges upon 
                        delivery. There is an additional $4 surcharge per skateboard, due to the size of this item. Please note that UPS does not deliver to APO/FPO addresses or P.O. boxes.</p>
                    <p>Please allow 3-5 business days for order processing and verification, and an additional 7-10 
                        business days for delivery. We are not responsible for any lost, stolen, or damaged shipments. 
                        All shipments are insured and the buyer assumes all responsibilities of claims made with the shipping carrier.</p>
                    <p className="faq__heading">Why can I only buy one style per product?</p>
                    <p>Due to the limited quantities of our products, at this time we can only sell one style per product. In some cases, such as skate decks, you may purchase one of each available style.</p>
                    <p className="faq__heading">When will my order arrive?</p>
                    <p>Please allow 3-5 business days for order processing and verification, and an additional 7-10 business days for delivery.</p>
                    <p className="faq__heading">I changed my mind. Can I get a refund or make an exchange?</p>
                    <p>Xupreme will gladly exchange an item for online store credit only. Before sending the item back, 
                        please fill out the return form found in your order shipment confirmation within 2 days of 
                        receipt of your shipment. Packages sent without first contacting us will not be accepted. Items 
                        to be exchanged must be returned in perfect, new condition with all original tags attached. 
                        Xupreme must receive the returned item within 7 days of return authorization. Please note TShirts, Hats, Skateboards, Bags, Accessories, Shoes or Sale Items cannot be returned or exchanged.</p>
                    <p className="faq__heading">Can you send me a sticker?</p>
                    <p>Nah Bruv.</p>
                </div>
            </div>
            <NavLower />
        </>
    );
};

export default Faq;