import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  constructor(private readonly experience: ExperienceService) { }

  myData = this.experience.getData();

  ngOnInit() {
    return this.myData;
  }

}
