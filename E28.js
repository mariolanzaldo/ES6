const async = {
    getAll: async function (urlArray, callback) {
        let calls = [];

        for (const url of urlArray) {
            calls.push(fetch(url).then(response => response.json()));
        }
        await Promise.allSettled(calls).then(responses => {
            let context = {};

            for (const response in responses) {
                context[parseInt(response) + 1] = responses[response];
            }

            callback.call(context);
        });
    }
}

function callback() {
    console.log(this);
}

const axCall1 = 'https://jsonplceholder.typicode.com/todos/1';
const axCall2 = 'https://jsonplaceholder.typicode.com/users/2';
async.getAll([axCall1, axCall2], callback);
