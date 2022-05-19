export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase()) === true;
    });
}

export const categotyFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    });
}

export const priceFilterMin = (goods, minValue) => {
    return goods.filter((goodsItem) => {
        return goodsItem.price >= minValue
    });
}

export const priceFilter = (goods, minValue, maxValue) => {
    return goods.filter((goodsItem) => {
        if (goodsItem.price >= minValue && goodsItem.price <= maxValue) {
            return goodsItem;
        }
    });
}

