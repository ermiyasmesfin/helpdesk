import React, { useState } from "react";

// import { Jumbotron } from "react-bootstrap";
import { LoginTechForm } from "../../components/login/technicial/Login.Tech.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import "./entry.style.css";

export const Entry2 = () => {
	const [frmLoad, setFrmLoad] = useState("loginTech");

	const handleOnResetSubmit = e => {
		e.preventDefault();
	};

	const formSwitcher = frmType => {
		setFrmLoad(frmType);
	};

	return (
		<div className="entry-page bg-info">
			<div className="form-box">
				{frmLoad === "loginTech" && <LoginTechForm formSwitcher={formSwitcher} />}

				{frmLoad === "rest" && (
					<ResetPassword
						// handleOnChange={handleOnChange}
						handleOnResetSubmit={handleOnResetSubmit}
						formSwitcher={formSwitcher}
						// email={email}
					/>
				)}
			</div>
		</div>
	);
};
