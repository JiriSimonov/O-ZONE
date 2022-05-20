import { priceFilter, hotSaleFilter } from "./filtres";
import getData from "./getData";
import renderGoods from "./renderGoods";

const price = () => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const checkboxInput = document.getElementById('discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
        })
    })

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
        })
    })

    checkboxInput.addEventListener('change', () => {
        checkboxSpan.classList.toggle('checked');
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
        })
    })
}

export default price