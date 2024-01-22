import { Col, Form, Image, Row } from 'react-bootstrap'

// images
// import layOutlight from '../../assets/images/'
// import layOutDark from '../../assets/images/layouts/dark.png'

const LayoutTheme = ({
	handleChangeLayoutTheme,
	layoutTheme,
	layoutConstants,
}) => {
	return (
		<>
			<h5 className="my-3 fs-16 fw-bold">Color Scheme</h5>
			<Row>
				<Col xs={4}>
					<Form.Check className="form-switch card-switch mb-1">
						<Form.Check.Input
							className="form-check-input"
							type="radio"
							name="data-bs-theme"
							id="layout-color-light"
							value={layoutConstants.light}
							onChange={(e) => handleChangeLayoutTheme(e.target.value)}
							checked={layoutTheme === layoutConstants.light}
						/>
						<Form.Check.Label
							className="form-check-label"
							htmlFor="layout-color-light"
						>
							{/* <Image src={layOutlight} alt="" className="img-fluid" /> */}
						</Form.Check.Label>
					</Form.Check>
					<h5 className="font-14 text-center text-muted mt-2">Light</h5>
				</Col>

				<Col xs={4}>
					<Form.Check className="form-switch card-switch mb-1">
						<Form.Check.Input
							className="form-check-input"
							type="checkbox"
							name="data-bs-theme"
							id="layout-color-dark"
							value={layoutConstants.dark}
							onChange={(e) => handleChangeLayoutTheme(e.target.value)}
							checked={layoutTheme === layoutConstants.dark}
						/>
						<Form.Check.Label htmlFor="layout-color-dark">
							{/* <Image src={layOutDark} alt="" className="img-fluid" /> */}
						</Form.Check.Label>
					</Form.Check>
					<h5 className="font-14 text-center text-muted mt-2">Dark</h5>
				</Col>
			</Row>
		</>
	)
}

export default LayoutTheme
