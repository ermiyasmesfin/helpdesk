import React, { useState } from "react";

// import { Jumbotron } from "react-bootstrap";
import { LoginTeamForm } from "../../components/login/team-leader/Login.Team.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import "./entry.style.css";

export const Entry1 = () => {
	const [frmLoad, setFrmLoad] = useState("loginTeam");

	const handleOnResetSubmit = e => {
		e.preventDefault();
	};

	const formSwitcher = frmType => {
		setFrmLoad(frmType);
	};

	return (
		<div className="entry-page bg-info">
			<div className="form-box">
				{frmLoad === "loginTeam" && <LoginTeamForm formSwitcher={formSwitcher} />}

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
