export const handleError = (values) => {
	const errors = {};
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	const phoneNumberRegex =
		/^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/i;
	if (!values.name) {
		errors.name = "Name is required";
	}
	if (!values.email) {
		errors.email = "Email is required";
	} else if (!emailRegex.test(values.email)) {
		errors.email = "This is not a valid email format";
	}
	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 4) {
		errors.password = "Password must be more than 8 characters";
	} else if (values.password.length > 10) {
		errors.password = "Password cannot exceed more than 15 characters";
	}
	if (!values.confirmPassword) {
		errors.confirmPassword = "Password Confirmation is required";
	} else if (values.confirmPassword.trim() !== values.password.trim()) {
		errors.confirmPassword = "Password is not matching";
	}
	if (!values.phoneNumber) {
		errors.phoneNumber = "Phone Number is required";
	} else if (!phoneNumberRegex.test(values.phoneNumber)) {
		errors.phoneNumber = "This is not a valid phone number";
	}
	return errors;
};
