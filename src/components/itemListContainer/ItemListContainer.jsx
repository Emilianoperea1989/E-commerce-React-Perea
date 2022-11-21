import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='container'>
            <div className='row '>
                <div className='col col-lg-12  text-center '>
                    <h2>{greeting}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer