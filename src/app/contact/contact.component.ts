import { Component,  OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    window.location.href = 'https://calendly.com/benhalverson/15min';
  }
}
