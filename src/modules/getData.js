const getData = () => {
    return fetch('https://o-zone-a3d75-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData