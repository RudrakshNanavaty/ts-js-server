import { Request, Response } from 'express'
const { v4: uuidv4 } = require('uuid')
import UserDB from '../models/users'
import { User } from '../entities/User'

export function getAllUsers(req: Request, res: Response) {
	return res.status(200).json(UserDB)
}

export function addUser(req: Request, res: Response) {
	const { username, email } = req.body

	if (!username || !email)
		return res.status(400).json({
			message: 'Please provide username and email',
		})

	// Generate a random UUID
	const id = uuidv4()

	const newUser: User = { id, username, email }

	UserDB.push(newUser)

	return res.status(201).json(newUser)
}

export function getUserByID(req: Request, res: Response) {
	const userID = req.params.id

	const user = UserDB.find(user => user.id === userID)

	return user
		? res.status(200).json(user)
		: res.status(404).json({ message: 'User not found' })
}

export function updateUser(req: Request, res: Response) {
	const userId = req.params.id
	const { username, email } = req.body

	const userIndex = UserDB.findIndex(user => user.id === userId)

	if (userIndex === -1)
		return res.status(404).json({ message: 'User not found' })

	if (username) UserDB[userIndex].username = username
	if (email) UserDB[userIndex].email = email

	return res.status(200).json(UserDB[userIndex])
}

export function deleteUser(req: Request, res: Response) {
	const userId = req.params.id

	const index = UserDB.findIndex(user => user.id === userId)

	if (index === -1) {
		return res.status(404).json({ message: 'User not found' })
	}

	const removedUser = UserDB.splice(index, 1)[0]

	return res.status(200).json({
		message: `User ${removedUser.username} deleted successfully`,
	})
}
