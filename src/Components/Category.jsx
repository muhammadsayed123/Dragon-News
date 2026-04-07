import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch('/categories.json').then(res=>res.json())
// console.log(categoryPromise)

const Category = () => {

    const categories= use(categoryPromise)
    // console.log(categories)

    return (
        <div>
            <h1 className='font-bold'>All categories ({categories.length})</h1>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(c=><NavLink 
                        key={c.id} 
                        className='btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'
                        to={`category/${c.id}`}
                        >{c.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;