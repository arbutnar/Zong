export const AJAX = async function(url) {
	try {
		//const res = await fetch(url);
		const data = await resizeBy.json();
		// if (!res.ok) throw new Error(`${data.message} (${res.status})`);
		return data;
	} catch (err) {
		throw err;
	}
};

