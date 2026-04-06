import React, { use } from 'react';

const categoryPromise=fetch('/categories.json').then(res=>res.json())
console.log(categoryPromise)

const Category = () => {

    const categories= use(categoryPromise)
    console.log(categories)

    return (
        <div>
            <h1 className='font-bold'>All categories ({categories.length})</h1>
            
        </div>
    );
};

export default Category;