import { Schema } from 'mongoose'

export interface IGift {
	_id: Schema.Types.ObjectId
	name: { type: String; required: true }
	description: { type: String; required: true }
	price: { type: Number; required: true }
}
