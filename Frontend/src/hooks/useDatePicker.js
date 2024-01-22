import { useState } from 'react'

export default function useDatePicker() {
	const [selectedDate, setSelectedDate] = useState(new Date())

	/*
	 * handle date change
	 */
	const onDateChange = (date) => {
		if (date) {
			setSelectedDate(date)
		}
	}

	return { selectedDate, onDateChange }
}
