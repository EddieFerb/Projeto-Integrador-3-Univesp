import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-test-connection',
  templateUrl: './test-connection.page.html',
  styleUrls: ['./test-connection.page.scss'],
})
export class TestConnectionPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.testDatabaseConnection();
  }

  testDatabaseConnection() {
    this.http.get(`${serv-paio-banco-de-dados.mysql.database.azure.com}/test-connection`).subscribe(
      (response) => {
        console.log('Conexão com o banco de dados bem-sucedida:', response);
      },
      (error) => {
        console.error('Erro na conexão com o banco de dados:', error);
      }
    );
  }
}
