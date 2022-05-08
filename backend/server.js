const app = require("./index");

//importing connect
const connect = require("./configs/db");

app.listen(5000, async function () {
	try {
		await connect();
		console.log("Listening to Port 5000");
	} catch (e) {
		console.error({ error: e.message });
	}
});
