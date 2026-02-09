const fs = require('fs');

exports.getBookById = (req, res) => {
    // Leemos el JSON que creamos antes
    const rawData = fs.readFileSync('./libros.json');
    const data = JSON.parse(rawData);
    
    // Obtenemos el ID de la URL
    const id = parseInt(req.params.id);
    const book = data.books.find(b => b.id === id);

    if (book) {
        // 'bookView' será el nombre del archivo en la carpeta views
        res.render('bookView', { book });
    } else {
        res.status(404).send("Libro no encontrado por ese índice.");
    }
};
