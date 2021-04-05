import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  menu: Menu;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onCancel() {

  }

}
