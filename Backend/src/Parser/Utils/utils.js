module.exports = (text, limit = 50000) => {
    if (text.length <= limit) return text; 

    while (limit < text.length && !/[\s\.\n,]/.test(text[limit])) {
        limit++;
    }; 

    return text.slice(0, limit).trim() + "...";
}