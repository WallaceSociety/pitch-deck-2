<script>
	export let totals;
</script>

<div class="total-bar">
	<div class="totals-grid">
		<div class="total-item">
			<span class="label">Additional Annual Revenue</span>
			<span class="value">${totals.revenue.toLocaleString()}</span>
		</div>
		<div class="total-item">
			<span class="label">Time Saved</span>
			<span class="value">{totals.timeSaved} hrs/week</span>
		</div>
		<div class="total-item">
			<span class="label">Staff Cost Savings</span>
			<span class="value">${totals.costSavings.toLocaleString()}</span>
		</div>
		<div class="total-item">
			<span class="label">Marketing ROI</span>
			<span class="value">{totals.marketingRoi}%</span>
		</div>
	</div>
	<div class="grand-total">
		<span class="label">Total Value Added</span>
		<span class="value">${totals.totalValue.toLocaleString()}</span>
	</div>
</div>

<style>
	.total-bar {
		background: white;
		border-top: 1px solid rgba(0, 0, 0, 0.05);
		padding: 1rem;
		box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);
	}

	.totals-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.total-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem;
		background: #f8f8f8;
		border-radius: 12px;
	}

	.label {
		font-size: 0.85rem;
		color: #666;
		font-weight: 500;
	}

	.value {
		font-size: 1.2rem;
		font-weight: 600;
		color: #1a1a1a;
	}

	.grand-total {
		text-align: center;
		padding: 1rem;
		background: linear-gradient(to right, #ff3e00, #ff5722);
		border-radius: 12px;
		color: white;
	}

	.grand-total .label {
		color: rgba(255, 255, 255, 0.9);
		font-size: 0.9rem;
	}

	.grand-total .value {
		color: white;
		font-size: 1.6rem;
	}
</style>