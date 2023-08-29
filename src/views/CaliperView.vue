<script setup>
import useTransmitter from '@/composables/useTransmitter';
import { onMounted } from 'vue';

const { foo, sendCustomEvent, sendPostMessage } = useTransmitter();

onMounted(() => {
	console.log('Caliper Mounted');
});
</script>

<template>
	<div>
		<span
			>Local Data = <span class="highlight">{{ foo }}</span></span
		>
		<button @click="sendCustomEvent">CustomEvent</button>
		<button @click="sendPostMessage">PostMessage</button>
	</div>
</template>

<style scoped>
div {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 1rem;
	margin: 1rem;
}

button {
	background-color: transparent;
	color: rgba(235, 235, 235, 0.64);
	border: 3px solid var(--vt-c-indigo);

	cursor: pointer;
}
</style>
