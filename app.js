// Dummy data – replace this with backend fetch later
const books = [
  { title: "Atomic Habits", author: "James Clear", review: "Life-changing book about habits!" },
  { title: "The Alchemist", author: "Paulo Coelho", review: "A magical story of dreams and destiny." },
  { title: "Deep Work", author: "Cal Newport", review: "Boosts focus and productivity." }
];

const bookList = document.getElementById('book-list');

books.forEach(book => {
  const div = document.createElement('div');
  div.className = 'book';
  div.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Review:</strong> ${book.review}</p>
  `;
  bookList.appendChild(div);
});
