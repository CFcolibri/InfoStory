
// import { Component, OnInit } from '@angular/core';
// import { DataOverdoseService } from '../../../../_services/data-overdose.service';

// import * as d3 from 'd3';

// @Component({
//   selector: 'app-overdose',
//   templateUrl: './overdose.component.html',
//   styleUrls: ['./overdose.component.css']
// })

// export class OverdoseComponent implements OnInit {
//   data!: { year: number; estimate: number; }[];

//   constructor(private DataOverdoseService: DataOverdoseService) {}

//   ngOnInit() {
//     this.loadData();
//   }

//   loadData() {
//     this.DataOverdoseService.GetTotalRateData().subscribe((csvData: string) => {
//       this.parseCSVData(csvData);
//       this.createLineGraph();
//       console.log('Data:', this.data);
//     });
//   }

//   parseCSVData(csvData: string) {
//     const parsedData = d3.csvParse(csvData);
//     this.data = parsedData.map((d) => ({
//       year: d['YEAR'] ? +d['YEAR'] : 0,
//       estimate: d['ESTIMATE'] ? +d['ESTIMATE'] : 0,
//     }));
//   }

//   createLineGraph() {
//     const margin = { top: 20, right: 20, bottom: 30, left: 50 };
//     const width = 600 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     const svg = d3
//       .select('#chartContainer')
//       .append('svg')
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom)
//       .append('g')
//       .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//     const x = d3
//       .scaleLinear()
//       .domain(d3.extent(this.data, (d) => d.year) as [number, number])
//       .range([0, width]);

//     const y = d3
//       .scaleLinear()
//       .domain([0, 50]) // Set the y-axis domain to 0-50
//       .range([height, 0]);

//     const line = d3
//       .line<{ year: number; estimate: number }>()
//       .x((d) => x(d.year)!)
//       .y((d) => y(d.estimate)!);

//     // Sort the data based on the year values
//     this.data.sort((a, b) => a.year - b.year);

//     svg
//       .append('path')
//       .datum(this.data)
//       .attr('class', 'line')
//       .attr('d', line);

//     svg
//       .append('g')
//       .attr('class', 'x-axis')
//       .attr('transform', 'translate(0,' + height + ')')
//       .call(d3.axisBottom(x));

//     svg
//       .append('g')
//       .attr('class', 'y-axis')
//       .call(d3.axisLeft(y).tickValues([10, 20, 30, 40, 50]));
//   }

// }

import { Component, OnInit } from '@angular/core';
import { DataOverdoseService } from '../../../../_services/data-overdose.service';

import * as d3 from 'd3';

@Component({
  selector: 'app-overdose',
  templateUrl: './overdose.component.html',
  styleUrls: ['./overdose.component.css']
})
export class OverdoseComponent implements OnInit {
  data!: { year: number; estimate: number; male: number; female: number }[];

  constructor(private DataOverdoseService: DataOverdoseService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.DataOverdoseService.GetTotalRateData().subscribe((csvData: string) => {
      this.parseCSVData(csvData);
      this.createLineGraph();
      console.log('Data:', this.data);
    });
  }

  parseCSVData(csvData: string) {
    const parsedData = d3.csvParse(csvData);
    this.data = parsedData.map((d) => ({
      year: d['YEAR'] ? +d['YEAR'] : 0,
      estimate: d['ESTIMATE'] ? +d['ESTIMATE'] : 0,
      male: d['MALE'] ? +d['MALE'] : 0,
      female: d['FEMALE'] ? +d['FEMALE'] : 0,
    }));
  }

  createLineGraph() {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select('#chartContainer')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const x = d3
      .scaleLinear()
      .domain(d3.extent(this.data, (d) => d.year) as [number, number])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, (d) => Math.max(d.estimate, d.male, d.female)) as number])
      .range([height, 0]);

    const line = d3
      .line<{ year: number; estimate: number; male: number; female: number }>()
      .x((d) => x(d.year)!)
      .y((d) => y(d.estimate)!);

    const maleLine = d3
      .line<{ year: number; estimate: number; male: number; female: number }>()
      .x((d) => x(d.year)!)
      .y((d) => y(d.male)!);

    const femaleLine = d3
      .line<{ year: number; estimate: number; male: number; female: number }>()
      .x((d) => x(d.year)!)
      .y((d) => y(d.female)!);

    this.data.sort((a, b) => a.year - b.year);

    svg
      .append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', line);

    svg
      .append('path')
      .datum(this.data)
      .attr('class', 'male-line')
      .attr('d', maleLine);

    svg
      .append('path')
      .datum(this.data)
      .attr('class', 'female-line')
      .attr('d', femaleLine);

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));
  }
}
