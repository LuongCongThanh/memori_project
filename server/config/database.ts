import mongoose from 'mongoose'

const URI = process.env.MONGODB_URL

// mongoose.connect(`${URI}`, {}, (err) => {
// 	if (err) throw err;
// 	console.log('Mongodb connection')
// });
// useCreateIndex: true,
// 	useFindAndModify: false,
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true


mongoose.connect(`${URI}`,
	{
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err) => {
		console.log('Mongodb connection')
	}
);

