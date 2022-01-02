import { publish } from "gh-pages";

publish(
	"build",
	{
		branch: "gh-pages",
		repo: "https://github.com/tristanlukens/tristanlukens.github.io.git",
		user: {
			name: "Tristan Lukens",
			email: "71601628+tristanlukens@users.noreply.github.com",
		},
		dotfiles: true,
	},
	() => {
		console.log("Deploy Complete!");
	}
);
