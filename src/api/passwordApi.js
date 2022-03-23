import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const otpReqUrl = rootUrl + "user/reset-password";
const updatePassUrl = rootUrl + "user/reset-password";
//tech
const otpReqUrl2 = rootUrl + "tech/reset-password";
const updatePassUrl2 = rootUrl + "tech/reset-password";
//team
const otpReqUrl3 = rootUrl + "team/reset-password";
const updatePassUrl3 = rootUrl + "team/reset-password";


//user
export const reqPasswordOtp = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(otpReqUrl, { email });

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateUserPassword = passObj => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.patch(updatePassUrl, passObj);

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

//tech
export const reqPasswordOtp2 = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(otpReqUrl2, { email });

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateTechPassword = passObj => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.patch(updatePassUrl2, passObj);

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
//team

export const reqPasswordOtp3 = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(otpReqUrl3, { email });

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateTeamPassword = passObj => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.patch(updatePassUrl3, passObj);

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};