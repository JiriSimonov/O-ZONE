import { priceFilterMin } from "./filtres";
import { priceFilter } from "./filtres";
import getData from "./getData";
import renderGoods from "./renderGoods";

const price = () => {
    const priceWrapper = document.querySelector('.filter-price_range');

    priceWrapper.addEventListener('input', () => {
        const minValue = document.getElementById('min').value;
        const maxValue = document.getElementById('max').value;
        if (maxValue === '') {
            getData().then((data) => {
                renderGoods(priceFilterMin(data, minValue));
            })
        } else {
            getData().then((data) => {
                renderGoods(priceFilter(data, minValue, maxValue));
            })
        }
    })
}

export default price