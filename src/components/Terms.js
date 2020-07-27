import React from "react";
import Header from "./Header";
import NavLower from "./NavLower";


const Terms = (props) => {

    return (
        <>
            <Header/>
            <div className="terms__main">
                <div className="terms__main-container">
                    <p className="terms__heading">Terms</p>
                    <p>Effective February 17, 2019</p>
                    <p className="terms__heading">Thank you for visiting the Xupreme website, www.xupremenewyork.com (“Site”) owned and operated 
                    by Chapter 4 Corp. (d/b/a Xupreme) (“Xupreme”, “us” or “we”). You should not access this Site or 
                    use our services until you have carefully read and agreed to these terms and conditions of use 
                    (the “Terms”) which govern your access to and use of this Site. These Terms apply to all Site 
                    visitors’ access to and use of the Site.</p>
                    <p className="terms__heading">Using this Site</p>
                    <p>Please use a standards-compliant web browser such as Safari 3.0+, Chrome or Firefox 3.0+. Javascript must be enabled to use the Site.</p>
                    <p className="terms__heading">Terms of Use</p>
                    <p>By using our Site, you agree to the Terms of Use. We may change or update these terms so please 
                        check this page regularly. We do not represent or warrant that the information on our web site 
                        is accurate, complete, or current. This includes pricing and availability information. We 
                        reserve the right to correct any errors or omissions, and to change or update information at any 
                        time without prior notice.</p>
                    <p className="terms__heading">Termination Clause</p>
                    <p>We reserve the right to terminate your access to our Site, without cause or notice. All 
                        provisions of this Agreement that, by their nature, should survive termination shall survive 
                        termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                    <p className="terms__heading">Purchase for Personal Use Only</p>
                    <p>You may purchase products only for personal use and not for resale. By placing your order, you 
                        certify that you are purchasing products for personal use only and not for resale. We reserve the right to refuse orders for any reason without explanation.</p>
                    <p className="terms__heading">Unlawful or Prohibited Uses</p>
                    <p>As a condition of your access to and use of this Site, you may not use the Site for any purpose 
                        that is unlawful or prohibited by these Terms. You may not disrupt, disable, overburden, or 
                        impair any function of the Site; attempt to gain unauthorized access to any portion of the Site; 
                        use data mining, robots, spiders, scraping or similar automated or manual methods; or circumvent or modify any feature of the Site.</p>
                    <p className="terms__heading">In Store Purchase Policy</p>
                    <p>You may only purchase one (1) style per product per person. Please note that you are also only 
                        limited to one transaction per customer, per day. The store staff reserves the right to refuse a purchase for any reason without explanation.</p>
                    <p className="terms__heading">Cancellation Policy</p>
                    <p>We do not allow cancellations once the order has been placed. All orders are final and cannot be 
                        changed after submission. We do our best to ship all packages within 14 days. In the event that 
                        you order has not shipped within 14 days, you may reach out to customer service to request a cancellation.</p>
                    <p className="terms__heading">Return Policy</p>
                    <p>We will gladly exchange an item for online store credit only. Before sending the item back, 
                        please fill out the return form found in your order shipment confirmation within 2 days of 
                        receipt of your shipment. Packages sent without first contacting us will not be accepted. Items 
                        to be exchanged must be returned in perfect, new condition with all original tags attached. Xupreme must receive the returned item within 7 days of return authorization.</p>
                    <p>For any returned items, you will not be refunded the original cost of shipping, and you are 
                        responsible for the cost of the return shipping. Items may not be returned or exchanged in 
                        person at any Xupreme store location. T-Shirts, Hats, Skateboards, Bags, Accessories, Shoes or 
                        Sale Items cannot be returned or exchanged. We do not assume responsibility for reimbursement or
                        compensation of returned packages lost in transit without proof of delivery to Xupreme.</p>
                    <p className="terms__heading">Shipping</p>
                    <p>At this time, we are only accepting orders from residents that live in the U.S.A., Canada and 
                        Mexico. All orders are shipped via UPS Ground. The shipping rate to the contiguous 48 U.S. 
                        states is $10. The shipping rate to Alaska and Hawaii is $25. Orders for Canada are charged a 
                        flat rate $20 fee for UPS expedited shipping and a Canadian Surcharge to cover all GST, HST, 
                        Duty and Brokerage. Canadian customers will not incur any additional charges upon delivery. 
                        Orders for Mexico are charged a flat rate $35 fee for UPS expedited shipping and a Mexican 
                        Surcharge to cover VAT and Duty. Mexican customers will not incur any additional charges upon 
                        delivery. There is an additional $4 surcharge per skateboard, due to the size of the item. Please note that UPS does not deliver to APO/FPO addresses or P.O. boxes.</p>
                </div>
            </div>
            <NavLower />
        </>
    );
};

export default Terms;