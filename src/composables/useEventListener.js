import { onMounted, onBeforeUnmount } from 'vue';

export default function useEventListener(
	target = window,
	type,
	listener,
	options,
) {
	onMounted(() => {
		target.addEventListener(type, listener, options);
	});
	onBeforeUnmount(() => {
		target.removeEventListener(type, listener, options);
	});
}
