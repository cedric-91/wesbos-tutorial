const ages = [14, 32, 60, 40, 68, 90];

const number = ages.map(age => age * 2); // Map creates a new array

const checkAge = ages.filter(age => age <= 14); // Creates a new array that checks the given value

  // Filter number that is greater then '70'
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const filterNumber = numbers.filter(numberFilter => numberFilter > 70);


// Songs
const songs = {
  name: 'All eyez on me',
  artist: 'Tupac',
  featuring: 'Biggie Smalls'
};

const markup = `
  <li>${songs.name} - ${songs.artist} ${songs.featuring ? `(ft ${songs.featuring})` : ''}</li>
`;

const html = document.querySelector('.songs');

html.innerHTML = markup;

// Books
const booksContainer = document.querySelector('.books-container');

const books = [
  {
    title: 'Book1',
    pages: 182,
    author: ['Jhon Doe', 'Lucas Frederick'],
    publisher: 'Sony',
    ratings: .5
  },
  {
    title: 'Book2',
    pages: 230,
    author: ['Cedric Siewe'],
    publisher: 'Sony',
    ratings: .8
  },
  {
    title: 'Book3',
    pages: 80,
    author: ['Jhon Doe', 'Lucas Frederick'],
    publisher: 'Virgin'
  }
];

let output = '';

const displayBooks = () => {
  books.forEach(book => {
    output += `
      <h2 class="books__title">${book.title}</h2>
      <span class="books__page">${book.pages}</span>
      <span class="books__author">${book.author}</span>
      <span class="books__publisher">${book.publisher}</span>
      ${book.ratings ? `<span class="books__ratings">${book.ratings}</span>` : ''}
    `;
  });

  return booksContainer.innerHTML = output;
};

displayBooks();
