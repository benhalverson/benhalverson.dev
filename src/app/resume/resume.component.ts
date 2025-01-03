import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceService } from '../experience.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.css',
    standalone: true,
    imports: [NgFor]
})
export class ResumeComponent {

  constructor(private readonly experience: ExperienceService) { }

  myData = this.experience.getData();

  ngOnInit() {
    return this.myData;
  }

}
