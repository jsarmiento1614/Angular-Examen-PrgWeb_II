import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  constructor(public http: HttpClient) { 
    this.http=http;
  }

  getAnimals(){
    return this.http.get("http://localhost:8080/api/pets");
  }

  getAnimalById(id: number){
    return this.http.get("http://localhost:8080/api/pets/"+id);
 
  }
}
