const getCArtFromLocalStorage = () => {
    const storedString = localStorage.getItem('cart');

    if (storedString) {
        const storedCart = JSON.parse(storedString);
        return storedCart;
    }
        return []
}

const saveCartToLocalStorage = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify)
}

const addCartToLocalStorage = id => {
    const cart = getCArtFromLocalStorage()
    const newCart = [...cart, id]
    saveCartToLocalStorage(newCart)
}

export {addCartToLocalStorage, getCArtFromLocalStorage}