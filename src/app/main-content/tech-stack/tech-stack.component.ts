import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  icons = [
    {
      path: 'assets/icons/angular.svg',
      lable: 'Angular'
    },
    {
      path: 'assets/icons/typescript.svg',
      lable: 'TypeScript'
    },
    {
      path: 'assets/icons/javascript.svg',
      lable: 'JavaScript'
    },
    {
      path: 'assets/icons/html.svg',
      lable: 'HTML'
    },
    {
      path: 'assets/icons/css.svg',
      lable: 'CSS'
    },
    {
      path: 'assets/icons/tailwind.svg',
      lable: 'Tailwind'
    },
    {
      path: 'assets/icons/api.svg',
      lable: 'REST-API'
    },
    {
      path: 'assets/icons/firebase.svg',
      lable: 'Firebase'
    },
    {
      path: 'assets/icons/git.svg',
      lable: 'Git'
    },
    {
      path: 'assets/icons/jira.svg',
      lable: 'Jira'
    },
  ];

}
