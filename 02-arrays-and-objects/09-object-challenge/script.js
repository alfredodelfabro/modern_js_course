const library = [
  {
    title: 'Book 1',
    author: 'Author 1',
    status: {
      own: false,
      reading: true,
      read: false
    }
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    status: {
      own: true,
      reading: false,
      read: true
    }
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    status: {
      own: true,
      reading: false,
      read: true
    }
  }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {
  title: firstBook
} = library[0];

const str = JSON.stringify(library);
