import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';
import { KittyService } from '../../services/kitty.service';
import { Kitty } from '../../models/kitty';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.scss']
})
export class NewCatComponent implements OnInit {
  addCatForm;

  constructor(
    private formBuilder: FormBuilder,
    private kittyService: KittyService
  ) { 
    this.addCatForm = this.formBuilder.group({
      id: '',
      name: ''
    });
  }

  onSubmit(kitty: Kitty) {
    console.log(kitty);
    this.kittyService.addNewKitty(kitty);
    this.addCatForm.reset();
  }

  ngOnInit() {
  }

}
