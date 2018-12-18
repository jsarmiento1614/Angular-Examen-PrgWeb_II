import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'src/app/shared/model/animal';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/shared/animal.service';

@Component({
  selector: 'app-detalles-animales',
  templateUrl: './detalles-animales.component.html',
  styleUrls: ['./detalles-animales.component.scss']
})
export class DetallesAnimalesComponent implements OnInit {
  @Input()
  animal: Animal;
  constructor(private animalService: AnimalService, private route: ActivatedRoute) {
      this.animalService=animalService;
      this.route=route;
   }

  ngOnInit() { 
    this.route.paramMap
    .subscribe(parameters => {
      let animalId =  Number(parameters.get("id"));
      this.getAnimal(animalId);
    },error => {
      console.log(`Error ${error}`);
    });
  }

  getAnimal(animalId:number){
    this.animalService.getAnimalById(animalId)
    .subscribe((data : Animal) => this.animal = data);
  }
}
