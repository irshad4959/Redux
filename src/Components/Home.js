import React from 'react'

function Home()
{
    return(
    <div className='App'>
        <div className='add-to-cart'>
        <img src= ' https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w=' />
        </div>
        <h1> Home Component</h1>    
        <div className='cart-wrapper'>
            <div className='img-item'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKf7kpEzYixjZeptQ4GBuv7I8SJt5-quk9Q&usqp=CAU' />
            </div>
            <div className='text-item'>
            <span>
            Iphone 13
            </span>
            </div>
            <div className='Price-wrapper'>
            <span>
             Price:$1000
            </span>
            </div>
            <div className='btn-wrapper'>
                <button>Add Cart</button>
            </div>
            
        </div>
    </div>
    )
}

export default Home;