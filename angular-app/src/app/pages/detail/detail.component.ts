import { Component, OnInit, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public data = {
    value: 123,
  };
  public processedData = {
    value: 456,
  };
  private differ: any;

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit() {
    this.differ = this.differs.find(this.data).create();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.data);

    if (changes) {
      console.log('Changes detected!');
      this.processedData.value = this.data.value;
      // Handle changes here
    }
  }

  public clickButton(): void {
    this.data.value++;
  }
}
