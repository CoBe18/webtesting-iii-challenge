export const asyncThing = function(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback();
            resolve(7);
        },  1000);
    })
}