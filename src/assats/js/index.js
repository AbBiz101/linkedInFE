export const fetchData = async (query, method) => {
	const myHeaders = new Headers();
	let url =
		'https://linkedin-backend-strive.herokuapp.com/profile/6194d85aad6c687f678236e2';
	try {
		console.log('api');
		//(query !== null || query !== undefined) {
		let response = await fetch(url, {
			headers: {
				method: 'GET',
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			let data = await response.json();
			console.log('response ok part');
			return data;
		} else {
			console.log('error with the fetch, with "METHOD" ');
		}
		// } else {
		//   let response = await fetch(url, {
		//     method: "GET",
		//     headers: myHeaders,
		//   });
		//   if (response.ok) {
		//     let data = await response.json();
		//     return data;
		//   } else {
		//     console.log('error with the fetch, method "GET" ');
		//   }
		// }
	} catch (err) {
		console.log(err);
	}
};
