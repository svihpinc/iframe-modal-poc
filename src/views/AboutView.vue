<script setup>
import useReceiver from '@/composables/useReceiver';
import { computed, ref } from 'vue';

const foo = useReceiver();

const iframeOptions = {
	5173: 'http://localhost:5173/caliper',
	3715: 'http://localhost:3715/caliper',
};
const selectedOption = ref(5173);
const iframeSrc = computed(() => iframeOptions[selectedOption.value]);
</script>

<template>
	<div class="about">
		<h1>This is an about page</h1>
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

		<iframe :src="iframeSrc"></iframe>
	</div>
</template>

<style scoped>
.about {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
}

iframe {
	height: 100%;
	width: 100%;
}

.portSwitcher {
	display: flex;
	gap: 1.5rem;
}
</style>
