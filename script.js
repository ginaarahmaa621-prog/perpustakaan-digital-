let books = [
    {
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        category: "Novel"
    },
    {
        title: "Sejarah Indonesia",
        author: "Sartono Kartodirdjo",
        category: "Sejarah"
    },
    {
        title: "Belajar HTML dan CSS",
        author: "Budi Santoso",
        category: "Teknologi"
    },
    {
        title: "Matematika Dasar",
        author: "Dewi Lestari",
        category: "Pendidikan"
    }
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const bookForm = document.getElementById("bookForm");

function displayBooks() {
    const keyword = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filteredBooks = books.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword);

        const matchesCategory =
            category === "Semua" ||
            book.category === category;

        return matchesSearch && matchesCategory;
    });

    bookList.innerHTML = "";

    if (filteredBooks.length === 0) {
        bookList.innerHTML = "<p>Buku tidak ditemukan.</p>";
        return;
    }

    filteredBooks.forEach((book, index) => {
        const bookCard = document.createElement("div");

        bookCard.className = "book";

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>✍️ ${book.author}</p>
            <span class="category">${book.category}</span>
            <button onclick="borrowBook(${index})">
                📖 Pinjam Buku
            </button>
        `;

        bookList.appendChild(bookCard);
    });
}

function borrowBook(index) {
    alert(
        `Buku "${books[index].title}" berhasil dipinjam!`
    );
}

bookForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;

    books.push({
        title: title,
        author: author,
        category: category
    });

    bookForm.reset();

    displayBooks();

    alert("Buku berhasil ditambahkan!");
});

searchInput.addEventListener("input", displayBooks);
categoryFilter.addEventListener("change", displayBooks);

displayBooks();

