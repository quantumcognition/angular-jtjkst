import { Component, Input } from '@angular/core';

@Component({
  selector: 'publishing',
  templateUrl: './publishing.component.html',
  styleUrls: ['./publishing.component.css'],
})
export class PublishingComponent {
  @Input() name: string;
  apiurl = 'http://localhost:3000';

  // Define API
  constructor(private http:HttpClient){}

  // Http Options
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

  readRandom($event, fname) {
    // console.log($event.isTrusted, fname);
  }

/*========================================
  CRUD Methods for consuming RESTful API
=========================================*/

// HttpClient API get() method => Fetch employees list
getEmployees(): Observable<Employee> {
  return this.http
    .get<Employee>(this.apiURL + '/employees')
    .pipe(retry(1), catchError(this.handleError));
}
// HttpClient API get() method => Fetch employee
getEmployee(id: any): Observable<Employee> {
  return this.http
    .get<Employee>(this.apiURL + '/employees/' + id)
    .pipe(retry(1), catchError(this.handleError));
}
// HttpClient API post() method => Create employee
createEmployee(employee: any): Observable<Employee> {
  return this.http
    .post<Employee>(
      this.apiURL + '/employees',
      JSON.stringify(employee),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
}
// HttpClient API put() method => Update employee
updateEmployee(id: any, employee: any): Observable<Employee> {
  return this.http
    .put<Employee>(
      this.apiURL + '/employees/' + id,
      JSON.stringify(employee),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
}
// HttpClient API delete() method => Delete employee
deleteEmployee(id: any) {
  return this.http
    .delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
}
// Error handling
handleError(error: any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(() => {
    return errorMessage;
  });
}
}

}
