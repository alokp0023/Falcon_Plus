import { useState, InputHTMLAttributes } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

import { FieldErrors, Control } from 'react-hook-form'
import { Link } from 'react-router-dom'


/* Password Input */
const PasswordInput = ({
	name,
	placeholder,
	refCallback,
	errors,
	// control,
	register,
	className,
}) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<>
			<InputGroup className="mb-0">
				<Form.Control
					type={showPassword ? 'text' : 'password'}
					placeholder={placeholder}
					name={name}
					id={name}
					as="input"
					ref={(r) => {
						if (refCallback) refCallback(r)
					}}
					className={className}
					isInvalid={errors && errors[name] ? true : false}
					{...(register ? register(name) : {})}
					autoComplete={name}
				/>
				<div
					className={`input-group-text input-group-password ${
						showPassword ? 'show-password' : ''
					}`}
					data-password={showPassword ? 'true' : 'false'}
				>
					<span
						className="password-eye"
						onClick={() => {
							setShowPassword(!showPassword)
						}}
					></span>
				</div>
			</InputGroup>
		</>
	)
}

const FormInput = ({
	label,
	type,
	name,
	placeholder,
	register,
	errors,
	control,
	className,
	labelClassName,
	labelContainerClassName,
	containerClass,
	isTerms = false,
	refCallback,
	children,
	rows,
	...otherProps
}) => {
	// handle input type
	const comp =
		type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input'
	return (
		<>
			{type === 'hidden' ? (
				<input
					type={type}
					name={name}
					{...(register ? register(name) : {})}
					{...otherProps}
				/>
			) : (
				<>
					{type === 'password' ? (
						<>
							<Form.Group className={containerClass}>
								{label ? (
									<div className={labelContainerClassName}>
										<Form.Label className={labelClassName}>{label}</Form.Label>
										{children}
									</div>
								) : null}
								<PasswordInput
									name={name}
									placeholder={placeholder}
									refCallback={refCallback}
									errors={errors}
									register={register}
									className={className}
								/>

								{errors && errors[name] ? (
									<Form.Control.Feedback type="invalid" className="d-block">
										{errors[name]['message']}
									</Form.Control.Feedback>
								) : null}
							</Form.Group>
						</>
					) : (
						<>
							{type === 'checkbox' || type === 'radio' ? (
								<>
									<Form.Group className={containerClass}>
										<Form.Check
											type={type}
											name={name}
											id={name}
											ref={(r) => {
												if (refCallback) refCallback(r)
											}}
											className={className}
											isInvalid={errors && errors[name] ? true : false}
											{...(register ? register(name) : {})}
											{...otherProps}
										>
											<Form.Check.Input type={type} />
											<Form.Check.Label>
												{label}{' '}
												{isTerms && (
													<span>
														I accept{' '}
														<Link to="#" className="text-muted">
															Terms and Conditions
														</Link>
													</span>
												)}
											</Form.Check.Label>
										</Form.Check>

										{errors && errors[name] ? (
											<Form.Control.Feedback type="invalid">
												{errors[name]['message']}
											</Form.Control.Feedback>
										) : null}
									</Form.Group>
								</>
							) : (
								<Form.Group className={containerClass}>
									{label ? (
										<Form.Label className={labelClassName}>{label}</Form.Label>
									) : null}

									<Form.Control
										type={type}
										placeholder={placeholder}
										name={name}
										id={name}
										as={comp}
										ref={(r) => {
											if (refCallback) refCallback(r)
										}}
										className={className}
										isInvalid={errors && errors[name] ? true : false}
										{...(register ? register(name) : {})}
										rows={rows}
										{...otherProps}
										autoComplete={name}
									>
										{children ? children : null}
									</Form.Control>

									{errors && errors[name] ? (
										<Form.Control.Feedback type="invalid">
											{errors[name]['message']}
										</Form.Control.Feedback>
									) : null}
								</Form.Group>
							)}
						</>
					)}
				</>
			)}
		</>
	)
}

export default FormInput
