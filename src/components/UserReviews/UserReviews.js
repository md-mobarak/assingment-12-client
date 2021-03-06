import React, { useEffect, useState } from 'react';
import Review from './Review';

const UserReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://whispering-lowlands-83696.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [reviews])
    return (
        <div className=''>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 '>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default UserReviews;