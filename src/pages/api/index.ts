import { dbConnection } from '@/mongo/mongo'
import Gift from '@/schemas/Gift'

dbConnection()

export default async function handler(req: any, res: any) {
	const { method } = req
	const { status } = res

	switch (method) {
		case 'GET':
			try {
				const gift = await Gift.find()
				return status(200).json(gift)
			} catch (err) {
				return status(404).json({ msg: err })
			}

		default:
			return status(400).json({ msg: 'this method is not supported' })
	}
}
