import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WithInfo } from "./Hocs/With-info";
import { Content } from "./Content/Content";
import NotFoundPage from "./components/NotFoundPage";

import twitter from "./Assets/twitter.webp";
import Richie from "./Assets/richie.png";
import "./App.scss";

function App() {
	useEffect(() => {
		window.send({ event: `PageView` });
	}, []);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/1.html" />
					<Route path="/2.html" />
					<Route path="/3.html" />
					<Route path="/4.html" />
					<Route exact path="/">
						<WithInfo>
							<h1 className="heading">Hangi aşı grubundayım?</h1>
							<Content />
							<img className="homepage-icon" src={Richie} alt="Homepage Icon" />
						</WithInfo>
						<p className="info">
							*Hesaplamalar tahmini veriler ile yapılmaktadır.
						</p>
						<a
							href="https://twitter.com/btnerylmz"
							target="_blank"
							rel="noreferrer"
						>
							<img className="twitter-icon" src={twitter} alt="Twitter Icon" />
						</a>
					</Route>
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
