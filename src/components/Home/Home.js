import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import MoreShop from '../MoreShop/MoreShop';
import PartsCar from '../PartsCar/PartsCar';
import TopBrands from '../TopBrands/TopBrands';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {

    const [partsProduct, setPartsProduct] = useState([])
    const sliceProduct = partsProduct.slice(0, 6)
    // console.log(partsProduct);
    useEffect(() => {
        fetch('https://whispering-lowlands-83696.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                setPartsProduct(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-center italic hover:not-italic text-secondary my-4 text-5xl font-bold'>CAR MANUFACTURING</h1>
            <Banner></Banner>
            <h1 className='text-center text-primary my-8 text-3xl font-bold'> PRODUCTS</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 mx-8 gap-12 '>
                {
                    sliceProduct.map(product => <PartsCar key={product._id} product={product}></PartsCar>)
                }

            </div>
            <div className='px-12 my-24'>
                <h1 className='text-center text-info mt-12 text-3xl font-bold'>CLIENT TRUST US</h1>
                <p className='text-center text-primary text-xl'>TYR TO UNDERSTAND USERS EXPECTATION</p>
                <div class="divider">OR</div>
                <BusinessSummary></BusinessSummary>
            </div>
            <div className='gap-x-5 mx-8'>
                <h1 className='text-center text-accent my-12 text-3xl font-bold'>USER REVIEWS</h1>
                <UserReviews></UserReviews>
            </div>
            <div>
                <h1 className='text-center text-primary my-12 text-3xl font-bold'>WE CARRY TOP BRANDS</h1>
                <div className='px-12 mt-0'>
                    <TopBrands></TopBrands>
                </div>
            </div>
            <div className='my-16'>
                <h1 className='text-center text-primary my-12 text-3xl font-bold'>MORE SHOP</h1>
                <div className='px-12 '>
                    <MoreShop></MoreShop>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;