import { elements } from './base';

let clearButtonSet = false;

export const getInput = () => elements.shoppingInput.value;

export const clearInput = () => { 
    elements.shoppingInput.value = '';
};

export const renderItem = item => {
    const markup = `
            <li class="shopping__item" data-itemid=${item.id}>
                <div class="shopping__count">
                    <input type="number" value="${item.count}" step="${item.count}" class="shopping__count--value">
                    <p>${item.unit}</p>
                </div>
                <p class="shopping__description">${item.ingredient}</p>
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>
            </li>
    `;
    const clear = `
            <form class="shopping__clear">
                <button class="btn-small">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                    <span>Clear</span>
                </button>
            </form>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
    if (!clearButtonSet) elements.shopping.insertAdjacentHTML('afterend', clear);
    clearButtonSet = true;
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};

export const clearItems = () => {
    elements.shopping.innerHTML = '';
    clearButtonSet = false;
    document.querySelector('.shopping__clear').innerHTML = '';
}