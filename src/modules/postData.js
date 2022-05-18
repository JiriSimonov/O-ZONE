const postData = () => {
    fetch('https://o-zone-a3d75-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify({
            title: '1',
            price: 3000,
            sale: false,
            img: '',
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
}

export default postData