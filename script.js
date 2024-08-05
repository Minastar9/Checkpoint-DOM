Event voici la partie javascript elle comporte le compteur, le total et le bouton supprimer
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.getElementById('total');

    const updateTotal = () => {
        let total = 0;
        cartItems.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalElement.textContent = total.toFixed(2);
    };

    cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            event.target.closest('.cart-item').remove();
            updateTotal();
        } else if (event.target.classList.contains('increment')) {
            const quantityElement = event.target.previousElementSibling;
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotal();
        } else if (event.target.classList.contains('decrement')) {
            const quantityElement = event.target.nextElementSibling;
            if (parseInt(quantityElement.textContent) > 1) {
                quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
                updateTotal();
            }
        } else if (event.target.classList.contains('like-button')) {
            event.target.classList.toggle('liked');
        }
    });

    updateTotal();
});
