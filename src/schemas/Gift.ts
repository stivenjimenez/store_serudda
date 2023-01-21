import type { IGift } from '@/models/Gift.model'
import { model, models, Schema } from 'mongoose'

const giftSchema = new Schema<IGift>({
	_id: Schema.Types.ObjectId,
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true }
})

export default models.Gift || model('Gift', giftSchema)
