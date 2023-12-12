import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workshop-component',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopComponent implements OnInit {
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((v) => console.log(v));
  }
}
