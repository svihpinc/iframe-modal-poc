<script setup>
import useReceiver from '@/composables/useReceiver';
import { computed, ref } from 'vue';

const foo = useReceiver();

function createIframeSrc(port) {
	return `http://localhost:${port}/caliper`;
}

const iframePortOptions = [5173, 3715];
const selectedPort = ref(iframePortOptions[0]);
const iframeSrc = computed(() => createIframeSrc(selectedPort.value));
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
			<span v-for="port in iframePortOptions" :key="port">
				<input type="radio" :id="port" :value="port" v-model="selectedPort" />
				<label :for="port">{{ port }}</label>
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
