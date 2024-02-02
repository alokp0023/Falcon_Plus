import { Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'
import { CustomCardPortlet } from '../../components'

// components

const weeklyChartOpts = {
	series: [
		{
			name: 'Revenue',
			data: [440, 505, 414, 526, 227, 413],
		},
		// {
		// 	name: 'Sales',
		// 	data: [ 258, 368, 458, 201, 365, 389],
		// },
		{
			name: 'Profit',
			data: [ 458, 369, 520, 180, 369, 160],
		},
	],
	chart: {
		height: 377,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '60%',
		},
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent'],
	},
	dataLabels: {
		enabled: false,
	},
	colors: ['#3bc0c3', '#1a2942', '#d1d7d973'],
	xaxis: {
		categories: [
			// 'Jun',
			'Aug',
			'Sept',
			'Oct',
			'Nov',
			'Dec',
			'Jan',
		],
	},
	yaxis: {
		title: {
			text: '$ (thousands)',
		},
	},
	legend: {
		offsetY: 7,
	},
	grid: {
		padding: {
			bottom: 20,
		},
	},
	fill: {
		opacity: 1,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return '$ ' + val + ' thousands'
			},
		},
	},
}

const WeeklySelesChart = () => {
	return (
		<CustomCardPortlet
			cardTitle="Last 6 Month Sales Report"
			titleClass="header-title"
		>
			<div dir="ltr">
				<ReactApexChart
					height={377}
					options={weeklyChartOpts}
					series={weeklyChartOpts.series}
					type="bar"
					className="apex-charts"
				/>
			</div>

			<Row className="text-center">
				<Col>
					<p className="text-muted mt-3">Current Week</p>
					<h3 className=" mb-0">
						<span>$506.54</span>
					</h3>
				</Col>
				<Col>
					<p className="text-muted mt-3">Previous Week</p>
					<h3 className=" mb-0">
						<span>$305.25 </span>
					</h3>
				</Col>
				<Col>
					<p className="text-muted mt-3">Conversation</p>
					<h3 className=" mb-0">
						<span>3.27%</span>
					</h3>
				</Col>
				<Col>
					<p className="text-muted mt-3">Customers</p>
					<h3 className=" mb-0">
						<span>3k</span>
					</h3>
				</Col>
			</Row>
		</CustomCardPortlet>
	)
}

export default WeeklySelesChart
