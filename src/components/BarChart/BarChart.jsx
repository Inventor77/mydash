import React, { useEffect, useRef } from 'react'
import * as d3 from "d3";
import './BarChart.scss'

const DATA = [
    { type: "A", value: 52 },
    { type: "B", value: 22 },
    { type: "C", value: 77 },
    { type: "D", value: 95 },
    { type: "E", value: 13 },
    { type: "F", value: 46 },
    { type: "G", value: 48 },
]

function BarChart() {
    const chartRef = useRef();


    useEffect(() => {
        const margin = {
            top: 36,
            right: 24,
            bottom: 24,
            left: 48
        }

        const width = parseInt(d3.select('.barChart__container').style('width')) - margin.left - margin.right;
        const height = parseInt(d3.select('.barChart__container').style('height')) - margin.top - margin.bottom;
        console.log(width, height);
        const svg = d3.select(chartRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)

        const xAxis = d3.scaleBand()
            .domain(d3.range(DATA.length))
            .range([margin.left, width - margin.right])
            .padding(.5)
        svg.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(xAxis)
                .tickFormat(idx => DATA[idx].type)
                .tickSizeOuter(0))

        const max = 100;

        const yAxis = d3.scaleLinear()
            .domain([0, max])
            .range([height, margin.top])
        svg.append('g')
            .attr('transform', 'translate(' + margin.left + ',0)')
            .call(d3.axisLeft(yAxis))

        svg.append('g')
            .attr('fill', '#ddd')
            .selectAll('rect')
            .data(DATA)
            .join('rect')
            .attr('x', (d, i) => xAxis(i))
            .attr('y', (d, i) => yAxis(d.value))
            .attr('height', d => yAxis(0) - yAxis(d.value))
            .attr('width', xAxis.bandwidth())
    }, [])
    return (
        <div className='barChart__container'>
            <svg ref={chartRef}>
            </svg>
        </div>
    )
}

export default BarChart