import { writable, derived } from 'svelte/store';

function createCalculatorStore() {
	const { subscribe, update } = writable({
		selectedFeatures: new Set(),
		totals: {
			revenue: 0,
			timeSaved: 0,
			costSavings: 0,
			marketingRoi: 0,
			totalValue: 0
		}
	});

	return {
		subscribe,
		toggleFeature: (feature) => update(state => {
			const newSelected = new Set(state.selectedFeatures);
			if (newSelected.has(feature)) {
				newSelected.delete(feature);
			} else {
				newSelected.add(feature);
			}

			// Recalculate totals
			const totals = calculateTotals(newSelected);

			return {
				selectedFeatures: newSelected,
				totals
			};
		})
	};
}

function calculateTotals(selectedFeatures) {
	let revenue = 0;
	let timeSaved = 0;
	let marketingRoi = 0;

	selectedFeatures.forEach(feature => {
		switch (feature.type) {
			case 'revenue':
				revenue += feature.value;
				break;
			case 'time':
				timeSaved += feature.value;
				break;
			case 'marketing':
				marketingRoi += feature.value;
				break;
		}
	});

	// Calculate cost savings based on time saved
	const hourlyRate = 25; // Assumed hourly rate
	const costSavings = timeSaved * hourlyRate * 52; // Annual savings

	return {
		revenue,
		timeSaved,
		costSavings,
		marketingRoi,
		totalValue: revenue + costSavings
	};
}

export const calculatorStore = createCalculatorStore();