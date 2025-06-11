import api from "../lib/axios";

const base = "/books";

class BookService {
  async createBook({
    title,
    author,
    publishYear,
    isbn,
    rfidTagId 
  }) {
    try {
      const res = api.post(
        `${base}`,
        { 
          title: title, 
          author: author,
          publishYear: publishYear, 
          isbn: isbn, 
          rfidTagId: rfidTagId
        }
      );
      return (await res).data;
    } catch (e) {
      console.error(e);
    }
  }

  async updateBook({
    id,
    title,
    author,
    publishYear,
    isbn,
  }) {
    try {
      const res = api.put(
        `${base}/${id}`,
        {
          ...(title != null && { title: title }),
          ...(author != null && { author: author }),
          ...(publishYear != null && { publishYear: publishYear }),
          ...(isbn != null && { isbn: isbn }),
        }
      );
      return (await res).data;
    } catch (e) {
      console.error(e);
    }
  }

  async getBooks() {
    try {
      return (await api.get(`${base}`)).data;
    } catch (e) {
      console.error(e);
    }
  }

  async getBookById(id) {
    try {
      return (await api.get(`${base}/${id}`)).data;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteBook(id) {
    try {
      return (await api.delete(`${base}/${id}`)).data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new BookService();