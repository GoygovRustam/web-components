// Progress bar
let progressBar = document.querySelector('progress-bar');
let progress = 0;

let progressInterval = setInterval(() => {
	progress += 1;

	if (progress > 100) {
		progress = 1;
	}

	progressBar.setAttribute('progress', progress);
}, 300);
