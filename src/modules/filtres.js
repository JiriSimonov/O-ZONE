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

export const priceFilter = (goods, minValue, maxValue) => {
    return goods.filter((goodsItem) => {
        if (minValue === '' && maxValue === '') {
            return goodsItem;
        } else if (minValue !== '' && maxValue !== '') {
            return goodsItem.price >= +minValue && goodsItem.price <= +maxValue;
        } else if (minValue !== '' && maxValue === '') {
            return goodsItem.price >= +minValue;
        } else if (minValue === '' && maxValue !== '') {
            return goodsItem.price <= +maxValue;
        }
    });
}

export const hotSaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if (value) {
            return goodsItem.sale === true;
        } else {
            return goodsItem;
        }
    });
}