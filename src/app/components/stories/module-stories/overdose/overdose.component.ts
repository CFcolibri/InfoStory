
import { Component, OnInit, AfterViewInit } from '@angular/core';
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

    const xAxis = d3.axisBottom(x)
      .tickFormat(d3.format("d")) // Format tick values as integers
      .tickValues(this.data.map((d) => d.year).filter((d) => d % 2 === 1)); // Filter and include every odd year


    const y = d3
      .scaleLinear()
      .domain([0, 50])
      .range([height, 0]);

    const yAxis = d3.axisLeft(y)
      .tickValues([0, 10, 20, 30, 40, 50]); // Set the tick values


    const lineColors = {
      estimate: 'black',
      male: 'blue',
      female: 'green',
    };

    const line = d3
      .line<{ year: number; estimate: number; male: number; female: number }>()
      .x((d) => x(d.year)!)
      .y((d) => y(d.estimate)!)
      .curve(d3.curveMonotoneX)
      .defined((d) => !isNaN(d.estimate));

    const maleLine = d3
      .line<{ year: number; estimate: number; male: number; female: number }>()
      .x((d) => x(d.year)!)
      .y((d) => y(d.male)!)
      .curve(d3.curveMonotoneX)
      .defined((d) => !isNaN(d.male));

    const femaleLine = d3
      .line<{ year: number; estimate: number; male: number; female: number }>()
      .x((d) => x(d.year)!)
      .y((d) => y(d.female)!)
      .curve(d3.curveMonotoneX)
      .defined((d) => !isNaN(d.female));



    svg
      .append('path')
      .datum(this.data)
      .attr('class', 'line estimate-line')
      .style('stroke', lineColors.estimate)
      .attr('d', line);

    svg
      .append('path')
      .datum(this.data)
      .attr('class', 'line male-line')
      .style('stroke', lineColors.male)
      .attr('d', maleLine);

    svg
      .append('path')
      .datum(this.data)
      .attr('class', 'line female-line')
      .style('stroke', lineColors.female)
      .attr('d', femaleLine);

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('fill', 'black');

      svg
      .append('g')
      .attr('class', 'y-axis')
      .call(yAxis)
      .selectAll('text')
      .style('fill', 'black');
  }
}



