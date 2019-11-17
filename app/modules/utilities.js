module.exports = {
    isError(value) {
        return (value instanceof Error);
    },
    isString(value) {
        return typeof value === 'string' || value instanceof String;
    },
    has(obj, keyName) {
        if (!obj) {
            return false;
        }
        return Object.prototype.hasOwnProperty.call(obj, keyName);
    },
};
