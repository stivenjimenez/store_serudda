import mongoose from 'mongoose'

export function dbConnection() {
	mongoose
		.connect(
			'mongodb+srv://tao:G5oJRs1yeBQUuGMu@datacluster.xh0tz9c.mongodb.net/?retryWrites=true&w=majority'
		)
		.then(() => {
			console.log('Database connected successfully')
		})
		.catch(err => {
			console.error(err)
			mongoose.connection.close()
		})
}
