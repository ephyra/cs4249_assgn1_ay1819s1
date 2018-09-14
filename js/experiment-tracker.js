// Class used to track experiment
class ExperimentTracker {


	constructor() {
		this.trials = [];
		this.attempt = 0;
		this.trial = null;
		this.attempt = null;
		this.menuType = null;
		this.menuDepth = null;
        this.menuBreadth = null;
		this.targetItem = null;
		this.selectedItem = null;
		this.startTime = null;
		this.endTime = null;
        this.timeTaken = null;
        this.mouseDistance = 0;
	}
	
	resetTimers(){
		this.startTime = null;
		this.endTime = null;
	}

	startTimer() {
		this.startTime = Date.now();
	}

	recordSelectedItem(selectedItem) {
		this.selectedItem = selectedItem;
		this.stopTimer();
	}

	stopTimer() {
		
		this.endTime = Date.now();
        this.timeTaken = (this.endTime - this.startTime) / 1000;
        this.trials.push([this.trial,this.attempt, this.menuType, this.menuDepth, this.menuBreadth, this.targetItem, this.selectedItem,this.timeTaken,this.mouseDistance])
        this.resetTimers();
		this.attempt++;

	}
    
    clearTrials() {
        this.trials = [];
    }

	newTrial() {
		this.attempt = 1;
	}

	toCsv() {
		var csvFile = "Trial,Attempt,Menu Type,Menu Depth,Menu Breadth,Target Item,Selected Item,Time Taken,Mouse Distance\n";
		for (var i = 0; i < this.trials.length; i++) {
			csvFile += this.trials[i].join(',');
			csvFile += "\n";
		}

		var hiddenLink = document.createElement('a');
		hiddenLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvFile);
		hiddenLink.target = '_blank';
		hiddenLink.download = 'experiment.csv';
		document.body.appendChild(hiddenLink);
		hiddenLink.click();
	}


}