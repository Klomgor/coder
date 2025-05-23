// Those mocks are fetched from the Coder API in dev.coder.com

import type { Line } from "components/Logs/LogLine";

export const MockSources = [
	{
		workspace_agent_id: "722654da-cd27-4edf-a525-54979c864344",
		id: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
		created_at: "2024-03-14T11:31:03.443877Z",
		display_name: "Startup Script",
		icon: "/emojis/25b6-fe0f.png",
	},
	{
		workspace_agent_id: "722654da-cd27-4edf-a525-54979c864344",
		id: "db9e2fdc-a227-42e4-a1a3-e534c1511eb7",
		created_at: "2024-03-14T11:31:03.443877Z",
		display_name: "Personalize",
		icon: "/icon/personalize.svg",
	},
	{
		workspace_agent_id: "722654da-cd27-4edf-a525-54979c864344",
		id: "310562c2-5a1d-4e0b-9a32-d214dadd1624",
		created_at: "2024-03-14T11:31:03.443877Z",
		display_name: "Git Clone",
		icon: "/icon/git.svg",
	},
	{
		workspace_agent_id: "722654da-cd27-4edf-a525-54979c864344",
		id: "f0df7490-1be9-4722-96b6-45037b011c93",
		created_at: "2024-03-14T11:31:03.443877Z",
		display_name: "File Browser",
		icon: "https://raw.githubusercontent.com/filebrowser/logo/master/icon_raw.svg",
	},
	{
		workspace_agent_id: "722654da-cd27-4edf-a525-54979c864344",
		id: "8e2c562c-3361-4eee-b45a-96a3df4b9760",
		created_at: "2024-03-14T11:31:03.443877Z",
		display_name: "Coder Login",
		icon: "/icon/coder.svg",
	},
	{
		workspace_agent_id: "722654da-cd27-4edf-a525-54979c864344",
		id: "5baf5687-7c10-47c1-a283-e70bc2b7e4eb",
		created_at: "2024-03-14T11:31:03.443877Z",
		display_name: "code-server",
		icon: "/icon/code.svg",
	},
	{
		workspace_agent_id: "722654da-cd27-4edf-a525-54979c864344",
		id: "72058186-2c5b-41c9-95f3-daf52f182843",
		created_at: "2024-03-14T11:31:03.443877Z",
		display_name: "Dotfiles",
		icon: "/icon/dotfiles.svg",
	},
	{
		workspace_agent_id: "722654da-cd27-4edf-a525-54979c864344",
		id: "51e74825-6d6c-41ee-a9c1-bb48d64eb86e",
		created_at: "2024-03-14T11:31:03.443877Z",
		display_name: "install_slackme",
		icon: "",
	},
];

export const MockLogs = [
	{
		id: 3295730,
		level: "info",
		output: "\u001b[0;1mLogging into Coder...",
		time: "2024-03-14T11:31:04.090715Z",
		sourceId: "8e2c562c-3361-4eee-b45a-96a3df4b9760",
	},
	{
		id: 3295731,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:04.090715Z",
		sourceId: "8e2c562c-3361-4eee-b45a-96a3df4b9760",
	},
	{
		id: 3295732,
		level: "info",
		output: "/home/coder/coder already exists and isn't empty, skipping clone!",
		time: "2024-03-14T11:31:04.239194Z",
		sourceId: "310562c2-5a1d-4e0b-9a32-d214dadd1624",
	},
	{
		id: 3295735,
		level: "info",
		output: "✨ \u001b[0;1mYou don't have a personalize script!",
		time: "2024-03-14T11:31:04.383656Z",
		sourceId: "db9e2fdc-a227-42e4-a1a3-e534c1511eb7",
	},
	{
		id: 3295736,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:04.383656Z",
		sourceId: "db9e2fdc-a227-42e4-a1a3-e534c1511eb7",
	},
	{
		id: 3295737,
		level: "info",
		output:
			"Run \u001b[36;40;1mtouch /home/coder/personalize && chmod +x /home/coder/personalize\u001b[0m to create one.",
		time: "2024-03-14T11:31:04.383656Z",
		sourceId: "db9e2fdc-a227-42e4-a1a3-e534c1511eb7",
	},
	{
		id: 3295738,
		level: "info",
		output:
			"It will run every time your workspace starts. Use it to install personal packages!",
		time: "2024-03-14T11:31:04.383656Z",
		sourceId: "db9e2fdc-a227-42e4-a1a3-e534c1511eb7",
	},
	{
		id: 3295739,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:04.383656Z",
		sourceId: "db9e2fdc-a227-42e4-a1a3-e534c1511eb7",
	},
	{
		id: 3295740,
		level: "info",
		output: "\u001b[0;1mInstalling code-server!",
		time: "2024-03-14T11:31:04.529726Z",
		sourceId: "5baf5687-7c10-47c1-a283-e70bc2b7e4eb",
	},
	{
		id: 3295741,
		level: "info",
		output: " * Starting Docker: docker",
		time: "2024-03-14T11:31:04.67431Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295742,
		level: "info",
		output: "   ...done.",
		time: "2024-03-14T11:31:04.67431Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295743,
		level: "error",
		output: "+ trap 'touch /tmp/.coder-startup-script.done' EXIT",
		time: "2024-03-14T11:31:04.67431Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295744,
		level: "error",
		output: "+ sudo service docker start",
		time: "2024-03-14T11:31:04.67431Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295745,
		level: "error",
		output: "+ [[ -f /home/coder/coder/site/package.json ]]",
		time: "2024-03-14T11:31:04.67431Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295746,
		level: "error",
		output: "+ cd /home/coder/coder/site",
		time: "2024-03-14T11:31:04.67431Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295747,
		level: "error",
		output: "+ pnpm install",
		time: "2024-03-14T11:31:04.67431Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295748,
		level: "info",
		output: "\u001b[0;1mInstalling filebrowser ",
		time: "2024-03-14T11:31:04.818334Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295749,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:04.818334Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295750,
		level: "info",
		output: "Downloading File Browser for linux/amd64...",
		time: "2024-03-14T11:31:04.818334Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295751,
		level: "info",
		output:
			"https://github.com/filebrowser/filebrowser/releases/download/v2.27.0/linux-amd64-filebrowser.tar.gz",
		time: "2024-03-14T11:31:04.818334Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295752,
		level: "info",
		output: "You are already authenticated with coder.",
		time: "2024-03-14T11:31:05.070816Z",
		sourceId: "8e2c562c-3361-4eee-b45a-96a3df4b9760",
	},
	{
		id: 3295755,
		level: "info",
		output: "Lockfile is up to date, resolution step is skipped",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295756,
		level: "info",
		output: "Already up to date",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295757,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295758,
		level: "info",
		output:
			"   ╭──────────────────────────────────────────────────────────────────╮",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295759,
		level: "info",
		output:
			"   │                                                                  │",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295760,
		level: "info",
		output:
			"   │                Update available! 8.14.0 → 8.15.4.                │",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295761,
		level: "info",
		output:
			"   │   Changelog: https://github.com/pnpm/pnpm/releases/tag/v8.15.4   │",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295762,
		level: "info",
		output:
			'   │     Run "corepack prepare pnpm@8.15.4 --activate" to update.     │',
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295763,
		level: "info",
		output:
			"   │                                                                  │",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295764,
		level: "info",
		output:
			"   │      Follow @pnpmjs for updates: https://twitter.com/pnpmjs      │",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295765,
		level: "info",
		output:
			"   │                                                                  │",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295766,
		level: "info",
		output:
			"   ╰──────────────────────────────────────────────────────────────────╯",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295767,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295768,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295769,
		level: "info",
		output: "Done in 1.5s",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295770,
		level: "error",
		output: "+ pnpm playwright:install",
		time: "2024-03-14T11:31:05.973518Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295771,
		level: "info",
		output: "Extracting...",
		time: "2024-03-14T11:31:06.203103Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295774,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:06.349058Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295775,
		level: "info",
		output: "> coder-v2@ playwright:install /home/coder/coder/site",
		time: "2024-03-14T11:31:06.349058Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295776,
		level: "info",
		output: "> playwright install --with-deps chromium",
		time: "2024-03-14T11:31:06.349058Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295777,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:06.349058Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295778,
		level: "info",
		output: "Putting filemanager in /usr/local/bin (may require password)",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295779,
		level: "info",
		output: "Successfully installed",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295780,
		level: "info",
		output: "🥳 Installation complete! ",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295781,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295782,
		level: "info",
		output: "👷 Starting filebrowser in background... ",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295783,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295784,
		level: "info",
		output: "📂 Serving /home/coder at http://localhost:13339 ",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295785,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295786,
		level: "info",
		output: "Running 'filebrowser --noauth --root /home/coder --port 13339' ",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295787,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295788,
		level: "info",
		output: "📝 Logs at /tmp/filebrowser.log ",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295789,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:06.494535Z",
		sourceId: "f0df7490-1be9-4722-96b6-45037b011c93",
	},
	{
		id: 3295790,
		level: "info",
		output: "🥳 code-server has been installed in /tmp/code-server",
		time: "2024-03-14T11:31:06.99008Z",
		sourceId: "5baf5687-7c10-47c1-a283-e70bc2b7e4eb",
	},
	{
		id: 3295791,
		level: "info",
		output: "",
		time: "2024-03-14T11:31:06.99008Z",
		sourceId: "5baf5687-7c10-47c1-a283-e70bc2b7e4eb",
	},
	{
		id: 3295792,
		level: "info",
		output: "👷 Running code-server in the background...",
		time: "2024-03-14T11:31:06.99008Z",
		sourceId: "5baf5687-7c10-47c1-a283-e70bc2b7e4eb",
	},
	{
		id: 3295793,
		level: "info",
		output: "Check logs at /tmp/code-server.log!",
		time: "2024-03-14T11:31:06.99008Z",
		sourceId: "5baf5687-7c10-47c1-a283-e70bc2b7e4eb",
	},
	{
		id: 3295796,
		level: "info",
		output: "Installing dependencies...",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295797,
		level: "info",
		output: "Switching to root user to install dependencies...",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295798,
		level: "info",
		output: "Hit:1 https://download.docker.com/linux/ubuntu jammy InRelease",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295799,
		level: "info",
		output:
			"Get:2 https://apt.releases.hashicorp.com jammy InRelease [12.9 kB]",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295800,
		level: "info",
		output: "Hit:3 https://packages.microsoft.com/repos/edge stable InRelease",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295801,
		level: "info",
		output: "Hit:4 https://deb.nodesource.com/node_18.x nodistro InRelease",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295802,
		level: "info",
		output:
			"Get:5 https://dl.google.com/linux/chrome/deb stable InRelease [1825 B]",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295803,
		level: "info",
		output:
			"Get:6 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295804,
		level: "info",
		output:
			"Get:7 https://dl.google.com/linux/chrome/deb stable/main amd64 Packages [1082 B]",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295805,
		level: "info",
		output: "Hit:8 http://archive.ubuntu.com/ubuntu jammy InRelease",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295806,
		level: "info",
		output: "Hit:9 https://dl.yarnpkg.com/debian stable InRelease",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295807,
		level: "info",
		output: "Hit:10 https://packages.cloud.google.com/apt cloud-sdk InRelease",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295808,
		level: "info",
		output:
			"Get:11 http://archive.ubuntu.com/ubuntu jammy-updates InRelease [119 kB]",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295809,
		level: "info",
		output:
			"Get:12 https://apt.releases.hashicorp.com jammy/main amd64 Packages [150 kB]",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295810,
		level: "info",
		output:
			"Hit:13 https://apt.postgresql.org/pub/repos/apt jammy-pgdg InRelease",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295811,
		level: "info",
		output:
			"Get:14 http://security.ubuntu.com/ubuntu jammy-security/universe amd64 Packages [1079 kB]",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295812,
		level: "info",
		output:
			"Hit:15 https://ppa.launchpadcontent.net/ansible/ansible/ubuntu jammy InRelease",
		time: "2024-03-14T11:31:07.59125Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295813,
		level: "info",
		output:
			"Hit:16 https://ppa.launchpadcontent.net/fish-shell/release-4/ubuntu jammy InRelease",
		time: "2024-03-14T11:31:07.827832Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295816,
		level: "info",
		output:
			"Get:17 http://archive.ubuntu.com/ubuntu jammy-backports InRelease [109 kB]",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295817,
		level: "info",
		output:
			"Get:18 http://security.ubuntu.com/ubuntu jammy-security/main amd64 Packages [1569 kB]",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295818,
		level: "info",
		output:
			"Hit:19 https://ppa.launchpadcontent.net/git-core/ppa/ubuntu jammy InRelease",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295819,
		level: "info",
		output:
			"Get:20 http://archive.ubuntu.com/ubuntu jammy-updates/universe amd64 Packages [1352 kB]",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295820,
		level: "info",
		output:
			"Hit:21 https://ppa.launchpadcontent.net/maveonair/helix-editor/ubuntu jammy InRelease",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295821,
		level: "info",
		output:
			"Hit:22 https://ppa.launchpadcontent.net/neovim-ppa/stable/ubuntu jammy InRelease",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295822,
		level: "info",
		output:
			"Get:23 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 Packages [1848 kB]",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295823,
		level: "info",
		output:
			"Get:24 http://archive.ubuntu.com/ubuntu jammy-backports/universe amd64 Packages [33.3 kB]",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295824,
		level: "info",
		output:
			"Get:25 http://archive.ubuntu.com/ubuntu jammy-backports/main amd64 Packages [80.9 kB]",
		time: "2024-03-14T11:31:08.974847Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295827,
		level: "info",
		output: "Fetched 6466 kB in 3s (2549 kB/s)",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295828,
		level: "info",
		output: "Reading package lists...",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295829,
		level: "error",
		output:
			"W: Target Packages (main/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295830,
		level: "error",
		output:
			"W: Target Packages (main/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295831,
		level: "error",
		output:
			"W: Target Packages (restricted/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295832,
		level: "error",
		output:
			"W: Target Packages (restricted/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295833,
		level: "error",
		output:
			"W: Target Packages (universe/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:39 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295834,
		level: "error",
		output:
			"W: Target Packages (universe/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:39 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295835,
		level: "error",
		output:
			"W: Target Packages (main/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295836,
		level: "error",
		output:
			"W: Target Packages (main/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295837,
		level: "error",
		output:
			"W: Target Packages (restricted/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295838,
		level: "error",
		output:
			"W: Target Packages (restricted/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295839,
		level: "error",
		output:
			"W: Target Packages (universe/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:39 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295840,
		level: "error",
		output:
			"W: Target Packages (universe/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:39 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.224434Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295843,
		level: "info",
		output: "Reading package lists...",
		time: "2024-03-14T11:31:10.572831Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295844,
		level: "info",
		output: "Building dependency tree...",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295845,
		level: "info",
		output: "Reading state information...",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295846,
		level: "error",
		output:
			"W: Target Packages (main/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295847,
		level: "error",
		output:
			"W: Target Packages (main/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295848,
		level: "info",
		output:
			"fonts-freefont-ttf is already the newest version (20120503-10build1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295849,
		level: "info",
		output: "fonts-liberation is already the newest version (1:1.07.4-11).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295850,
		level: "info",
		output: "libasound2 is already the newest version (1.2.6.1-1ubuntu1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295851,
		level: "info",
		output: "libatk-bridge2.0-0 is already the newest version (2.38.0-3).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295852,
		level: "info",
		output: "libatk1.0-0 is already the newest version (2.36.0-3build1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295853,
		level: "info",
		output: "libatspi2.0-0 is already the newest version (2.44.0-3).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295854,
		level: "info",
		output: "libcairo2 is already the newest version (1.16.0-5ubuntu2).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295855,
		level: "info",
		output: "libfontconfig1 is already the newest version (2.13.1-4.2ubuntu5).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295856,
		level: "info",
		output: "libnspr4 is already the newest version (2:4.32-3build1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295857,
		level: "info",
		output: "libxcb1 is already the newest version (1.14-3ubuntu3).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295858,
		level: "info",
		output: "libxcomposite1 is already the newest version (1:0.4.5-1build2).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295859,
		level: "info",
		output: "libxdamage1 is already the newest version (1:1.1.5-2build2).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295860,
		level: "info",
		output: "libxext6 is already the newest version (2:1.3.4-1build1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295861,
		level: "info",
		output: "libxfixes3 is already the newest version (1:6.0.0-1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295862,
		level: "info",
		output: "libxkbcommon0 is already the newest version (1.4.0-1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295863,
		level: "info",
		output: "libxrandr2 is already the newest version (2:1.5.2-1build1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295864,
		level: "error",
		output:
			"W: Target Packages (restricted/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295865,
		level: "error",
		output:
			"W: Target Packages (restricted/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:37 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295866,
		level: "error",
		output:
			"W: Target Packages (universe/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list:39 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295867,
		level: "error",
		output:
			"W: Target Packages (universe/binary-all/Packages) is configured multiple times in /etc/apt/sources.list:39 and /etc/apt/sources.list.d/security.list:1",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295868,
		level: "info",
		output:
			"xfonts-scalable is already the newest version (1:1.0.3-1.2ubuntu1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295869,
		level: "info",
		output:
			"fonts-ipafont-gothic is already the newest version (00303-21ubuntu1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295870,
		level: "info",
		output: "fonts-tlwg-loma-otf is already the newest version (1:0.7.3-1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295871,
		level: "info",
		output: "fonts-unifont is already the newest version (1:14.0.01-1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295872,
		level: "info",
		output: "fonts-wqy-zenhei is already the newest version (0.9.45-8).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295873,
		level: "info",
		output: "xfonts-cyrillic is already the newest version (1:1.0.5).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295874,
		level: "info",
		output:
			"fonts-noto-color-emoji is already the newest version (2.042-0ubuntu0.22.04.1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295875,
		level: "info",
		output: "libcups2 is already the newest version (2.4.1op1-1ubuntu4.8).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295876,
		level: "info",
		output: "libdbus-1-3 is already the newest version (1.12.20-2ubuntu4.1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295877,
		level: "info",
		output:
			"libdrm2 is already the newest version (2.4.113-2~ubuntu0.22.04.1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295878,
		level: "info",
		output:
			"libfreetype6 is already the newest version (2.11.1+dfsg-1ubuntu0.2).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295879,
		level: "info",
		output:
			"libgbm1 is already the newest version (23.2.1-1ubuntu3.1~22.04.2).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295880,
		level: "info",
		output: "libglib2.0-0 is already the newest version (2.72.4-0ubuntu2.2).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295881,
		level: "info",
		output: "libnss3 is already the newest version (2:3.68.2-0ubuntu1.2).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295882,
		level: "info",
		output:
			"libpango-1.0-0 is already the newest version (1.50.6+ds-2ubuntu1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295883,
		level: "info",
		output:
			"libwayland-client0 is already the newest version (1.20.0-1ubuntu0.1).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295884,
		level: "info",
		output: "libx11-6 is already the newest version (2:1.7.5-1ubuntu0.3).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295885,
		level: "info",
		output: "xvfb is already the newest version (2:21.1.4-2ubuntu1.7~22.04.8).",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295886,
		level: "info",
		output: "0 upgraded, 0 newly installed, 0 to remove and 2 not upgraded.",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
	{
		id: 3295887,
		level: "error",
		output: "+ touch /tmp/.coder-startup-script.done",
		time: "2024-03-14T11:31:10.859531Z",
		sourceId: "d9475581-8a42-4bce-b4d0-e4d2791d5c98",
	},
] satisfies Line[];
