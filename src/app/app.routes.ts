import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('../app/projects/projects.component').then(m => m.ProjectsComponent)
  },

{
    path: 'resume',
    loadComponent: () => import('../app/resume/resume.component').then(m => m.ResumeComponent)
  }
];
