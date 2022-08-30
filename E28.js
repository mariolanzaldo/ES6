const async = {
    getAll: async function (urlArray, callback) {
        let calls = [];

        for (const url of urlArray) {
            calls.push(fetch(url).then(response => response.json()));
        }
        await Promise.allSettled(calls).then(response => {
            const fulfilled = response.filter(result => result.status === 'fulfilled').map(result => result.value);
            const rejected = response.filter(result => result.status === 'rejected').map(result => result.reason);


            callback({ rejected, fulfilled });
        });
    }
}

function callback(context) {
    context.fulfilled.forEach(fulfilled => console.log(fulfilled));
    context.rejected.forEach(rejected => console.log(rejected));
}

const axCall1 = 'https://jsonplceholder.typicode.com/todos/1';
const axCall2 = 'https://jsonplaceholder.typicode.com/users/2';
async.getAll([axCall1, axCall2], callback);
