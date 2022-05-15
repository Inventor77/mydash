import React, { useState, useEffect, useRef } from 'react'
import * as d3 from "d3";
import './BarChart.scss'

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const MARGIN = {
    top: 36,
    right: 24,
    bottom: 24,
    left: 48
}

function BarChart() {
    const [random, setRandom] = useState(true);
    const chartRef = useRef();

    function drawChart(DATA) {
        const width = parseInt(d3.select('.barChart__container').style('width')) - MARGIN.left - MARGIN.right;
        const height = parseInt(d3.select('.barChart__container').style('height')) - MARGIN.top - MARGIN.bottom;

        const svg = d3.select(chartRef.current)
            .attr('width', width + MARGIN.left + MARGIN.right)
            .attr('height', height + MARGIN.top + MARGIN.bottom)

        const xAxis = d3.scaleBand()
            .domain(d3.range(DATA.length))
            .range([MARGIN.left, width - MARGIN.right])
            .padding(.5)
        svg.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(xAxis)
                .tickFormat(idx => DATA[idx].type)
                .tickSizeOuter(0))

        const max = 100;

        const yAxis = d3.scaleLinear()
            .domain([0, max])
            .range([height, MARGIN.top])
        svg.append('g')
            .attr('transform', 'translate(' + MARGIN.left + ',0)')
            .call(d3.axisLeft(yAxis))

        svg.append('g')
            .attr('fill', '#89cff0')
            .selectAll('rect')
            .data(DATA)
            .join('rect')
            .attr('x', (d, i) => xAxis(i))
            .attr('y', (d, i) => yAxis(d.value))
            .attr('height', d => yAxis(0) - yAxis(d.value))
            .attr('width', xAxis.bandwidth())
    }

    useEffect(() => {
        const DATA = [
            { type: "A", value: getRandomArbitrary(5, 95) },
            { type: "B", value: getRandomArbitrary(5, 45) },
            { type: "C", value: getRandomArbitrary(5, 65) },
            { type: "D", value: getRandomArbitrary(5, 25) },
            { type: "E", value: getRandomArbitrary(5, 100) },
            { type: "F", value: getRandomArbitrary(5, 50) },
            { type: "G", value: getRandomArbitrary(5, 90) },
        ]
        console.table(DATA);
        d3.select(chartRef.current).selectAll('*').remove();
        drawChart(DATA);
    }, [random])
    return (
        <div className='barChart__container'>
            <svg className='svg'
                ref={chartRef}>
            </svg>
            <div className="button__container">
                <button
                    className='button'
                    onClick={() => setRandom(!random)}>
                    Click me
                </button>
            </div>
        </div>
    )
}

export default BarChart