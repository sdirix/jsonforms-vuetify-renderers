export { default as ControlRenderer } from './ControlRenderer.vue';
import { entry as controlRendererEntry } from './ControlRenderer.vue';

export { default as ObjectRenderer } from './ObjectControlRenderer.vue';
import { entry as objectRendererEntry } from './ObjectControlRenderer.vue';

export const controlRenderers = [controlRendererEntry, objectRendererEntry];
