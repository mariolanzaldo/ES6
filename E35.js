function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll('tr'));
    const fragment = document.createDocumentFragment();

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    fragment.append(...sortedRows);
    tBody.append(fragment);

    table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
}

const table = document.querySelector('.table-sortable');

table.addEventListener('click', event => {
    if (event.target.textContent === 'Age') {
        const headerIndex = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);
        const currentIsAscending = event.target.classList.contains("th-sort-asc");

        sortTableByColumn(table, headerIndex, !currentIsAscending);
    }
});