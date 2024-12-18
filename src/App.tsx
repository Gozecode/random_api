import { useState, useEffect } from "react";
import "./App.css";
import EmployeeCard from "./components/EmployeeCard";

function App() {
	const [employee, setEmployee] = useState({
		name: {
			first: "Charlie",

			last: "Thompson",
		},

		email: "charlie.thompson@example.com",

		picture: {
			medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
		},
	});
	const getEmployee = () => {
		fetch("https://randomuser.me/api/")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};
	useEffect(() => {
		getEmployee();
	}, []);

	return (
		<>
			<div>
				<EmployeeCard employee={employee} />
				<button type="button" onClick={() => getEmployee()}>
					change employee
				</button>
			</div>
		</>
	);
}

export default App;
