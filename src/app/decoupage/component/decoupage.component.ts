import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { DecoupageModel } from '../models/decoupage.model';
import { DecoupageService } from '../services/decoupage.service';

@Component({
  selector: 'app-decoupage',
  templateUrl: './decoupage.component.html',
  styleUrls: ['./decoupage.component.scss']
})
export class DecoupageComponent implements OnInit {
  constructor(private decoupageService: DecoupageService) { }

  public decoupages: DecoupageModel[] = [];

  ngOnInit(): void {
    this.decoupages = this.decoupageService.getAllDecoupages();
  }

}
