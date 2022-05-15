export const handleError = (values) => {
	const errors = {};
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	if (!values.name) {
		errors.name = "Name is required";
	}
	if (!values.email) {
		errors.email = "Email is required";
	} else if (!regex.test(values.email)) {
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
	} else if (values.phoneNumber.length !== 10) {
		errors.phoneNumber = "Phone Number must be 10 digit number";
	}
	return errors;
};
