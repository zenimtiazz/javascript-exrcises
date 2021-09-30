const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};

const parseTitle = title => {  // This function takes one parameter title
  const lowerTitle = title.toLowerCase(); // Transformthe title into lowercase
  const wrapped = wrapWithTag(lowerTitle, `li`); // It takes  the lowecase and combined with tag
  document.write(wrapped); // display the elements
};

document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);
