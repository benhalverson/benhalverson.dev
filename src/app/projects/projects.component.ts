import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ExperienceService } from '../experience.service';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-projects',
    imports: [HeaderComponent, FooterComponent, NgFor, NgOptimizedImage],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  constructor(private readonly experience: ExperienceService) {}

  myData = this.experience.getData();

  ngOnInit() {
   return this.myData;
  }

}
