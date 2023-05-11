module.exports = (req, res) => {
	const userId = req.cookies.userId;
	console.log(userId);
	connection.query(`SELECT * FROM items WHERE owner_id = ${userId}`, (err, rows) => {
		// Check if cannot find the data in the database then return the error
		console.log("DEBUG: /basic/userId => " + userId);
		if (err) {
			res.json({
				success: false,
				data: null,
				error: err.message,
			});
		} else {
			// Return data to the client if success
			return res.json({
				success: true,
				data: rows,
				error: null,
			});
		}
	});
};
