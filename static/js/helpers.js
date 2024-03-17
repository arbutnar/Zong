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

// export const isCollision = function(rect1, rect2) {
// 	return (
// 		rect1.left <= rect2.right &&
// 		rect1.right >= rect2.left &&
// 		rect1.top <= rect2.bottom &&
// 		rect1.bottom >= rect2.top
// 	)
// }

