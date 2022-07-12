const async = {
    getAll: async function (urlArray, callback) {
        try {
            const calls = [];

            for (const url of urlArray) {
                const response = await fetch(url);
                calls.push(response);
            }

            for (const response of calls) {
                if (!response.ok) {
                    throw { status: response.status, statusText: response.statusText };
                }
                const json = await response.json();
                callback(json);
            }
        } catch (err) {
            throw new Error(err);
        }

    }
}

function callback(response) {
    if (Array.isArray(response)) {
        for (const element of response) {
            console.log(element);
        }
    } else if (typeof response === 'object') {
        console.log(response);
    }
}

const axCall1 = 'https://jsonplaceholder.typicode.com/todos/5';
const axCall2 = 'https://jsonplaceholder.typicode.com/users';
async.getAll([axCall1, axCall2], callback);