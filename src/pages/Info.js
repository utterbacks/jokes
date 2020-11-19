import React from "react";

function Info() {
	return (
		<div className=" m-10 px-4 justify-center">
			<div className="text-center border border-gray-400 rounded shadow-lg mb-5 px-4 pb-1 bg-pink-100">
				<h2 className="text-4xl font-semibold ">What is this thing?</h2>
				<p>
					It's a small create-react-app that uses{" "}
					<a className="text-blue-500" href="https://sv443.net/jokeapi/v2/">
						JokeAPI{" "}
					</a>{" "}
					to search for and render some funny jokes!
				</p>
			</div>
			<div className="text-center border border-gray-400 rounded shadow-lg mb-5 px-4 pb-1 bg-pink-100">
				<h2 className="text-4xl font-semibold ">Okay, but why?</h2>
				<p>
					Glad you asked. As a developer, I find it valuable to find new-to-me,
					popular technologies and how to use them. This app in particular was a
					great learning experience to me on how to use React and the{" "}
					<code className="bg-gray-400">.fetch()</code> method to fetch some
					data, convert it to JSON, and use that object to pull out the data I
					wanted to display. I also learned a bit about a practical use-case for
					the react hooks <code className="bg-gray-400">useState()</code> and{" "}
					<code className="bg-gray-400">useEffect()</code>. That, coupled with
					some string interpolation gives the user the chance to set their own
					categories of jokes to display.{" "}
				</p>
			</div>
		</div>
	);
}

export default Info;
