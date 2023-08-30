<script setup>
import useTransmitter from '@/composables/useTransmitter';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { foo, sendCustomEvent, sendPostMessage } = useTransmitter();

const route = useRoute();
const currentUrl = computed(
	() => new URL(route.fullPath, window.location.origin).href,
);

onMounted(() => {
	console.log('Caliper Mounted');
});
</script>

<template>
	<div>
		<h1>This is {{ currentUrl }}</h1>

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
