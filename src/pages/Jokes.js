// imports needed to compile app
import React, { useEffect, useState } from "react";
// import './App.css';
import List from "../components/List";
import withListLoading from "../components/withListLoading";

// variables needed to construct API url
const baseUrl = "https://sv443.net/jokeapi/v2";
const blackList = "?blacklistFlags=nsfw,religious,political,racist,sexist";
const cat = ["Programming", "Miscellaneous", "Pun", "Spooky", "Christmas"];

// this function actually goes and gets a joke
function fetchJokes(cat) {
	// length = 0 means false, sending it to the second part of the conditional
	const categories = cat.length ? cat.join(",") : "Any";
	const url = `${baseUrl}/joke/${categories}?${blackList}`;
	return fetch(url).then((res) => res.json());
}

// This is the actual component that gets rendered.
function Jokes() {
	// define higher-order component and pass along the joke html to render
	const ListLoading = withListLoading(List);
	const [jokeState, setJokeState] = useState({
		loading: false,
		jokes: null,
	});
	const [catState, setCatState] = useState([]);

	useEffect(() => {
		setJokeState({ loading: true });
		fetchJokes(catState).then((joke) => {
			if (joke.type === "single") {
				setJokeState({
					loading: false,
					joke: joke.joke,
					setup: null,
					delivery: null,
				});
			} else if (joke.type === "twopart") {
				setJokeState({
					loading: false,
					joke: null,
					setup: joke.setup,
					delivery: joke.delivery,
				});
			}
		});
	}, [catState]);

	/* handleClick is 'pointed to' by handleClick in the checkbox input. */

	const handleClick = (e) => {
		const category = e.target.value;
		if (catState.includes(category)) {
			// filter catState to not include category and set returned value as current state
			setCatState(catState.filter((option) => option !== category));
		} else {
			// append category to current state
			setCatState([...catState, category]);
			console.log(`catState is ${catState}`);
		}
	};

	return (
		<div className="m-10 px-4 flex justify-center">
			<div>
				<ListLoading
					isLoading={jokeState.loading}
					joke={jokeState.joke}
					delivery={jokeState.delivery}
					setup={jokeState.setup}
				/>
				<ul className="flex justify-center">
					<li className="inline m-2 text-center">
						<div className="border rounded border-gray-400 bg-pink-100 mb-5 px-4 px-3 shadow-sm focus:outline-none">
							<label>Click a flag to find a joke!</label>
						</div>
					</li>
					{cat.map((cat, index) => (
						<li key={index} className="inline m-2 text-center">
							<div className="border rounded border-gray-400 bg-pink-100 mb-5 px-4 px-3 shadow-sm focus:outline-none">
								<input
									id="cat"
									type="checkbox"
									value={cat}
									onClick={handleClick}
									className="mr-2"
								/>
								<label htmlFor="cat">{cat}</label>
							</div>
						</li>
					))}
					<li className="inline m-2 text-center">
						<a href="/">
							<button className="border rounded border-gray-400 bg-pink-100 mb-5 px-4 shadow-md focus:outline-none">
								Any
							</button>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Jokes;
