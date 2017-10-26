import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input() params: any;

  constructor() { }

  ngOnInit() {
  }

}
