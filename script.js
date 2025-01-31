/** @format */

function updateTime() {
	const now =
		new Date();
	const utcTime = now
		.toISOString()
		.split("T")[1]
		.split(".")[0];
	document.getElementById(
		"utcTime",
	).textContent = `${utcTime}`;
}

updateTime();

const bioText =
	"I'm an aspiring frontend developer eager to learn and grow in the tech space. I enjoy building small projects to improve my skills and explore new technologies. Passionate about creating simple and user-friendly web experiences. I love sharing ideas, collaborating with others, and staying up-to-date with industry trends. My goal is to become a skilled developer who builds practical and impactful web solutions. Every day is an opportunity to get better and refine my craft.";
document.getElementById(
	"biography",
).textContent =
	bioText;
