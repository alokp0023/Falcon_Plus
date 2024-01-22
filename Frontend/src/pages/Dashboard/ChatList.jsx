import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Row, Col, Button } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//components

// images
import profilePic from '../../assets/images/avatar-2.jpg'
import { CustomCardPortlet, FormInput } from '../../components'

/* Chat Item Avatar */
const ChatItemAvatar = ({
	userAvatar,
	postedOn,
}) => {
	return (
		<>
			<div className="chat-avatar">
				<img src={userAvatar} alt={userAvatar} />
				<i>{postedOn}</i>
			</div>
		</>
	)
}

/* Chat Item Text */
const ChatItemText = ({
	userName,
	text,
}) => {
	return (
		<>
			<div className="conversation-text">
				<div className="ctext-wrap">
					<i>{userName}</i>
					<p>{text}</p>
				</div>
			</div>
		</>
	)
}

/* Chat Item */
const chatItemDefaultProps = {
	placement: '',
	children: PropTypes.object,
	className: '',
}

const ChatItem = ({
	children,
	placement,
	className,
}) => {
	return (
		<li
			className={classNames(
				'clearfix',
				{ odd: placement === 'left' },
				className
			)}
		>
			{children}
		</li>
	)
}

ChatItem.defaultProps = chatItemDefaultProps

/**
 * Renders the ChatForm
 */
const ChatForm = ({
	onNewMessagesPosted,
}) => {
	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			newMessage: yup.string().required('Please enter your messsage'),
		})
	)

	const methods = useForm({ resolver: schemaResolver })
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		reset,
	} = methods

	/**
	 * Handle valid form submission
	 */
	const handleValidMessageSubmit = (values) => {
		const message = values['newMessage']
		onNewMessagesPosted(message)
		reset()
	}

	return (
		<>
			<form
				name="chat-form"
				id="chat-form"
				onSubmit={handleSubmit(handleValidMessageSubmit)}
			>
				<Row>
					<Col>
						<FormInput
							type="text"
							name="newMessage"
							className="form-control chat-input"
							placeholder="Enter your text"
							register={register}
							key="newMessage"
							errors={errors}
							control={control}
						/>
					</Col>
					<Col className="col-auto">
						<Button
							type="submit"
							variant="danger"
							className="chat-send waves-effect waves-light"
						>
							Send
						</Button>
					</Col>
				</Row>
			</form>
		</>
	)
}




/**
 * Renders the ChatList
 */
const ChatList = (props) => {
	const [messages, setMessages] = useState(props.messages)

	/**
	 * Handle new message posted
	 */
	const handleNewMessagePosted = (message) => {
		// save new message
		setMessages(
			messages.concat({
				id: messages.length + 1,
				userPic: profilePic,
				userName: 'Thomson',
				text: message,
				postedOn: new Date().getHours() + ':' + new Date().getMinutes(),
			})
		)
	}

	return (
		<CustomCardPortlet cardTitle="Chat" titleClass="header-title">
			<div className="chat-conversation">
				{/* chat messages */}
				<SimpleBar style={{ maxHeight: '370px', width: '100%' }}>
					<ul className={`conversation-list ${props.className}`}>
						{(messages || []).map((message, i) => {
							return (
								<ChatItem
									key={i}
									placement={message.userName === 'Thomson' ? 'left' : 'right'}
								>
									{message.userPic && (
										<ChatItemAvatar
											userAvatar={message.userPic}
											postedOn={message.postedOn}
										/>
									)}
									<ChatItemText
										userName={message.userName}
										text={message.text}
									/>
								</ChatItem>
							)
						})}
					</ul>
				</SimpleBar>

				{/* chat form */}
				<ChatForm onNewMessagesPosted={handleNewMessagePosted} />
			</div>
		</CustomCardPortlet>
	)
}

export default ChatList
