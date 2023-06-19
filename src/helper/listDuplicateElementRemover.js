module.exports.duplicateRemover = characters.filter((element, index) => {
    return characters.indexOf(element) === index;
});