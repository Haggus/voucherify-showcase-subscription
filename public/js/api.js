let storeItems = [
    {
        id: '0',
        name: 'A box of strawberries',
        img: 'img/strawberries.jpg',
        desc: 'A tasty box of strawberries, straight from sunny California!',
        price: '$5.99'
    },
    {
        id: '1',
        name: 'A box of grapes',
        img: 'img/grapes.jpg',
        desc: 'A tasty box of grapes, straight from sunny California!',
        price: '$7.99'
    },
    {
        id: '2',
        name: 'A box of raspberries',
        img: 'img/raspberries.jpg',
        desc: 'A tasty box of raspberries, straight from sunny California!',
        price: '$19.99'
    }
];

const Api = {
    getStoreItems: function() {
        return storeItems.slice(0);
    },

    //for simplicity we are returning the index, which also happens to
    //be the id.
    getStoreItem: function(id) {
        return storeItems[id];
    }
};

export default Api;
