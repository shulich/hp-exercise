import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }
  @Input() title: string = 'Week 01';
  @Input() subTitle: string = 'Jan 1 - Jan 7,2018';
  @Input() doughnutChartData: number[] = [80,20];
  @Input() doughnutChartType: string ='doughnut';
  ngOnInit() {
  }

}
