import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day19-practice1',
  templateUrl: './day19-practice1.component.html',
  styleUrls: ['./day19-practice1.component.css']
})
export class Day19Practice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day19/p1.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
