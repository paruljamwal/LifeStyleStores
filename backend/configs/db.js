const mongoose = require("mongoose");

module.exports = () => {
	return mongoose.connect(
		"mongodb+srv://root123:root123@cluster0.xafcn.mongodb.net/LifeStyleStores?retryWrites=true&w=majority"
	);
};
