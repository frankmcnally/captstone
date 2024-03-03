import React from 'react';
import recipes from '../recipes';
import Swal from'sweetalert2';

const Menu = () => {

    const handleOrder = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Item Added to Order",   
            text: "Would you like to add more?",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Yes, More Food!",
            cancelButtonText: "No, I'm Done",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Don't forget Deserts!",
                text: "(They are all Homemade)",
                icon: "success"
              });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Order Done",
                text: "Thank you for your business!",
                icon: "success"
              });
            }
          });
    }
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This Week's Specials</h2>
                <button>Order Menu</button>
            </div>

            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt={recipe.title} />
                        <div className='menu-content'>  
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;