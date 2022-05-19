import { searchFilter } from "./filtres";
import { categotyFilter } from "./filtres";
import getData from "./getData";
import renderGoods from "./renderGoods";

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog li');

    let isOpen = false;

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen === true) {
            catalogModal.style.display = 'block';
        }

        else {
            catalogModal.style.display = '';
        }
    })

    catalogModalItems.forEach(item => {
        const txt = item.textContent;
        item.addEventListener('click', () => {
            getData().then((data) => {
                renderGoods(categotyFilter(data, txt))
            })
        })
    })
}

export default catalog