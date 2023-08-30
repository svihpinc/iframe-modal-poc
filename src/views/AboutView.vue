<script setup>
import useReceiver from '@/composables/useReceiver';
import { computed, ref } from 'vue';

const foo = useReceiver();

const iframeOptions = {
	5173: 'https://qqnmlr-5173.csb.app/caliper',
	3715: 'https://m6rmwj-5173.csb.app/caliper',
};
const selectedOption = ref(5173);
const iframeSrc = computed(() => iframeOptions[selectedOption.value]);
</script>

<template>
	<div class="about">
		<div>
			<h1>Select a url to show in the adjacent Iframe</h1>

			<p>
				Data from iframe : <span class="highlight">{{ foo }}</span>
			</p>
			<p>
				Iframe Src : <span class="highlight">{{ iframeSrc }}</span>
			</p>

			<div class="portSwitcher">
				<span v-for="(option, key) in iframeOptions" :key="key">
					<input type="radio" :id="key" :value="key" v-model="selectedOption" />
					<label :for="key">{{ option }}</label>
				</span>
			</div>
		</div>

		<iframe :src="iframeSrc"></iframe>
	</div>
</template>

<style scoped>
.about {
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	gap: 5rem;
	width: 100%;
}

h1 {
	color: #41b883;
	margin-bottom: 1rem;
}

iframe {
	height: 100%;
	width: 100%;
}

.portSwitcher {
	display: flex;
	gap: 1.5rem;

	margin-top: 1rem;
}
</style>
