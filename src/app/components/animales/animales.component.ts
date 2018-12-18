import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/shared/animal.service';
import { Animal } from 'src/app/shared/model/animal';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit {
  animal:Array<Animal>;
  animalSelected:Animal;
  constructor(private animalService: AnimalService) {
    this.animalService = animalService;
 }

  ngOnInit() {
    this.animalService.getAnimals()
    .subscribe((data : Array<Animal>) =>{
      this.animal = data.slice(0,10);
    },error => {
      console.log(`Error ${error}`);
    });
  }

  onSelect(animal : Animal) : void{
    this.animalSelected = animal;
  }

}
