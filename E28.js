const async = {
    getAll: async function (urlArray, callback) {
        let calls = [];

        for (const url of urlArray) {
            calls.push(fetch(url).then(response => response.json()));
        }
        await Promise.allSettled(calls).then(response => {
            let callbackContext = {};

            const fullfilledData = response.filter(result => result.status === 'fulfilled');

            for (const element of fullfilledData) {
                callbackContext[fullfilledData.indexOf(element) + 1] = element.value;
            }
            callback(callbackContext);
        });
    }
}

function callback(results) {
    console.log(results);
}

const axCall1 = 'https://jsonplaceholder.typicode.com/todos/1';
const axCall2 = 'https://jsonplaceholder.typicode.com/users/2';
async.getAll([axCall1, axCall2], callback);
