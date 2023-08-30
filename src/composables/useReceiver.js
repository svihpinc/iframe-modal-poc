import { ref, toValue } from 'vue';
import useEventListener from '@/composables/useEventListener';

export default function useReceiver() {
	const aboutFoo = ref(123);

	function onMyCustomEvent(e) {
		aboutFoo.value = Number(e.detail);
		console.log('custom event caught with', aboutFoo.value);
	}

	function onPostMessage(e) {
		aboutFoo.value = Number(e.data);
		console.log('post message caught with', aboutFoo.value, toValue(aboutFoo));
	}

	useEventListener(window, 'myCustomEvent', onMyCustomEvent);
	useEventListener(window, 'message', onPostMessage);

	return aboutFoo;
}
