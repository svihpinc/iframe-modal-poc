import { ref } from 'vue';
import useEventListener from '@/composables/useEventListener';

export default function useReceiver() {
	const aboutFoo = ref(123);

	function onMyCustomEvent(e) {
		aboutFoo.value = e.detail;
		console.log('custom event caught with', aboutFoo.value);
	}

	function onPostMessage(e) {
		aboutFoo.value = e.data;
		console.log('post message caught with', aboutFoo.value);
	}

	useEventListener(window, 'myCustomEvent', onMyCustomEvent);
	useEventListener(window, 'message', onPostMessage);

	return aboutFoo;
}
