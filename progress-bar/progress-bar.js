class ProgressBar extends HTMLElement {
	constructor() {
		super();

		this.shadow = this.createShadowRoot();

		this._progress = 0;
	}

	get progress() {
		return this._progress;
	}

	set progress(val) {
		this.setAttribute('progress', val);
	}

	static get observedAttributes() {
		return ['progress'];
	}

	attributeChangedCallback(name, oldVal, newVal) {
		let innerBar = this.shadow.querySelector('.progress-bar-inner');
		switch (name) {
			case 'progress':
				this._progress = parseInt(newVal, 10) || 0;
				innerBar.style.width = this.progress + '%';
				innerBar.innerHTML = this.progress + '%';
		}
	}

	connectedCallback() {
		let template = `
            <style> 
                .progress-bar {
                    height: 12px;
                    background-color: #e5e5e5;
                    border-radius: 5px;
                    color: white;
                    box-shadow: 0px 0px 5px 0px black;
                }
                .progress-bar-inner {
                    height: 100%;
                    line-height: 12px;
                    background: #a7a7a7;
                    border-radius: 5px;
                    transition: width 0.25s;
                    text-align: center;
                }
            </style>
            <div class="progress-bar"> 
                <div class="progress-bar-inner"> ${this.progress} % </div>
            </div>
        `;
		this.shadow.innerHTML = template;
	}
}

window.customElements.define('progress-bar', ProgressBar);
