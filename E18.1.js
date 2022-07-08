async function loadData(url) {
    const firstNameInput = document.querySelector('.form_control.firstName');
    const lastNameInput = document.querySelector('.form_control.lastName');
    const phoneInput = document.querySelector('.form_control.phone');
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers()
    });

    if (!response.ok) {
        console.error(`${{ status: response.status, statusText: response.statusText }}`);
    };

    const data = await response.json();
    for (const key in data) {
        const { name: { firstName, lastName, phone } } = data[key];
        firstNameInput.value = `${firstName}`;
        lastNameInput.value = `${lastName}`;
        phoneInput.value = `${phone}`;
    }
}

async function saveTr(self) {
    const [firstNameInput, lastNameInput, phoneInput] = self.closest('tr').querySelectorAll('input');

    if (firstNameInput.value && lastNameInput.value && phoneInput.value) {
        const currentCandidate = {
            name: {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                phone: phoneInput.value
            }
        }
        const response = await fetch('./E18.json', {
            method: 'PUT',
            body: JSON.stringify(currentCandidate),
            headers: new Headers()
        });

        if (!response.ok) {
            console.error(`${{ status: response.status, statusText: response.statusText }}`);
        }

        const data = await response.json();

        loadData('./E18.json');
    } else if (!firstNameInput.value && !lastNameInput.value && !phoneInput.value) {
        alert('There is nothing to be saved!');
    }
}

async function createTr(url) {
    const tableBody = document.getElementById('table_body');
    const firstTr = tableBody.firstElementChild;
    const trClone = firstTr.cloneNode(true);

    tableBody.appendChild(trClone);

    const newCandidate = {
        name: {
            firstName: undefined,
            lastName: undefined,
            phone: undefined
        }
    };

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newCandidate),
        headers: new Headers()
    });

    if (!response.ok) {
        console.error(`${{ status: response.status, statusText: response.statusText }}`);
    }

    cleanFirstTr(tableBody.firstElementChild);
}

function cleanFirstTr(firstTr) {
    let children = firstTr.children;

    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(element => {
        if (element !== firstTr.lastElementChild) {
            element.firstElementChild.value = '';
        }
    });
}


async function removeTr(self) {
    if (self.closest('tbody').childElementCount == 1) {
        alert('You are not allowed to delete this!');
    } else {
        const element = self.closest('tr');
        await fetch('./E18.json', {
            method: 'DELETE',
            headers: new Headers()
        });

        if (!response.ok) {
            console.error(`${{ status: response.status, statusText: response.statusText }}`);
        }

        element.remove();
    }
}

const table = document.querySelector('._table');

table.addEventListener('click', function (event) {
    if (event.target.className === 'success') {
        createTr("./E18.json");
    } else if (event.target.className === 'remove') {
        removeTr(event.target);
    } else if (event.target.className === 'save') {
        saveTr(event.target);
    }
});

loadData("./E18.json");