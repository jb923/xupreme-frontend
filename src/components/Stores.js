import React from 'react';
import Header from './Header';
import NavMain from './NavMain';


const Stores = () => {

    return (
        <>
            <Header />
            <div className="stores__container">
                <div className="stores stores__ny">
                <img className="stores__img" src="https://d17ol771963kd3.cloudfront.net/assets/stores/store_12_zoomed-275b6121f2347a296f9866d30a086a7f.jpg" />
                <p className='stores__name'>Supreme New York</p>
                <p className='stores__address'>190 Bowery</p>
                <p className='stores__address'>NYC 10012</p>
                <p className='stores__address'>Tel 212-966-7799</p>
                <p>Open 11 - 7 (MON-SAT)</p>
                <p>12 - 6 (SUN)</p>
                </div>
                <div className="stores stores__brooklyn">
                <img className="stores__img" src="https://d17ol771963kd3.cloudfront.net/assets/stores/store_11_zoomed-44748ee4597baf559b137f86a6ea1611.jpg" />
                <p className='stores__name'>Supreme Brooklyn</p>
                <p className='stores__address'>152 Grand Street</p>
                <p className='stores__address'>Brooklyn, NY 11249</p>
                <p className='stores__address'>Tel 718-599-2700</p>
                <p>Open 11 - 7 (MON-SAT)</p>
                <p>12 - 6 (SUN)</p>
                </div>
                <div className="stores stores__sf">
                <img className="stores__img" src="https://d17ol771963kd3.cloudfront.net/assets/stores/store_13_zoomed-4000d722acc3d0afebcd24022fc804c8.jpg" />
                <p className='stores__name'>Supreme San Francisco</p>
                <p className='stores__address'>1015 Market Street</p>
                <p className='stores__address'>San Francisco, CA 94103</p>
                <p className='stores__address'>Tel 415-991-2929</p>
                <p>Open 11 - 7 (MON-SAT)</p>
                <p>12 - 6 (SUN)</p>
                </div>
                <div className="stores stores__la">
                <img className="stores__img" src="https://d17ol771963kd3.cloudfront.net/assets/stores/store_2_zoomed-ef303e01bbbcd0e7aa6a4dd2a86a9213.jpg" />
                <p className='stores__name'>Supreme Los Angeles</p>
                <p className='stores__address'>439 North Fairfax Ave</p>
                <p className='stores__address'>LA 90036</p>
                <p className='stores__address'>Tel 323-655-6205</p>
                <p>Open 11 - 7 (MON-SAT)</p>
                <p>12 - 6 (SUN)</p>
                </div>
                <div className="stores stores__london">
                <img className="stores__img" src="https://d17ol771963kd3.cloudfront.net/assets/stores/store_8_zoomed-0151e2e327d1cbc6832e0a7968734f26.jpg" />
                <p className='stores__name'>Supreme London</p>
                <p className='stores__address'>2/3 Peter Street</p>
                <p className='stores__address'>London W1F 0AA</p>
                <p className='stores__address'>Tel +44 207-437-0493</p>
                <p>Open 11 - 7 (MON-SAT)</p>
                <p>12 - 6 (SUN)</p>
                </div>
                <div className="stores stores__paris">
                <img className="stores__img" src="https://d17ol771963kd3.cloudfront.net/assets/stores/store_10_zoomed-b1f5a1e6e0fc7361d150e9d3bd1e2524.jpg" />
                <p className='stores__name'>Supreme Paris</p>
                <p className='stores__address'>20 Rue Barbette</p>
                <p className='stores__address'>Paris 75003</p>
                <p className='stores__address'>Tel +33 1 43 48 80 14</p>
                <p>Open 11 - 7 (MON-SAT)</p>
                <p>12 - 6 (SUN)</p>
                </div>
                <div className="stores stores__shibuya">
                <img className="stores__img" src="https://d17ol771963kd3.cloudfront.net/assets/stores/store_9_zoomed-03626552cdc7f24d363bab396e888661.jpg" />
                <p className='stores__name'>Supreme Tokyo</p>
                <p className='stores__address'>1-18-2 Jinnan,</p>
                <p className='stores__address'>Shibuya-Ku</p>
                <p className='stores__address'>Tel 03-5428-4393</p>
                <p>Open 11 - 8</p>
                <p>(MON-SUN)</p>
                </div>
            </div>
            <NavMain />
        </>
    )

}

export default Stores;