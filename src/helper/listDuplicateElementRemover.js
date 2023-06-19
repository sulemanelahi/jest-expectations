module.exports.duplicateRemover = (characters) => {
  characters.filter((element, index) => {
    return characters.indexOf(element) === index;
  });
};
