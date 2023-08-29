import { ref } from 'vue';

export default function useTransmitter() {
	const foo = ref(getRandom());

	function getRandom() {
		return Math.floor(Math.random() * 100);
	}

	function sendCustomEvent(value) {
		const event = new CustomEvent('myCustomEvent', { detail: value });
		window.parent.dispatchEvent(event);

		console.log('custom event dispatched with', value);
		return;
	}

	function sendPostMessage(value) {
		window.parent.postMessage(value, '*');
		console.log('post message dispatched with', value);
	}

	function onCTA(isPostMessage = false) {
		foo.value = getRandom();

		if (!isPostMessage) {
			sendCustomEvent(foo.value);
			return;
		}

		sendPostMessage(foo.value);
	}

	return {
		foo,
		sendCustomEvent: () => onCTA(),
		sendPostMessage: () => onCTA(true),
	};
}
