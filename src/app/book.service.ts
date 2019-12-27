import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API_URL = 'http://localhost:8081/books';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.API_URL}/${id}`);
  }

  createBook(book: Book): Observable<any> {
    return this.http.post(`${this.API_URL}`, book);
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(`${this.API_URL}`, book);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
