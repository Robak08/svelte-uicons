<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.016 5.731 3.025 2.724 10.427.257a5 5 0 0 1 3.162 0l7.419 2.473-8.992 3.001Zm-3.182 5.623 2.175-3.624-7.946-2.649a1.387 1.387 0 0 0-1.628.602L.308 7.563a2.026 2.026 0 0 0 1.097 2.965l5.081 1.694a2 2 0 0 0 2.347-.868ZM3.008 2.718v.011l.017-.006-.017-.006Zm8 21.187V11.617l-.46.766a3.976 3.976 0 0 1-4.695 1.736l-3.845-1.281v4.558a4.999 4.999 0 0 0 3.419 4.743l4.435 1.478c.374.121.758.22 1.146.287Zm12.72-16.309L22.58 5.683a1.387 1.387 0 0 0-1.628-.602l-7.945 2.648 2.175 3.624a1.998 1.998 0 0 0 2.347.868l5.118-1.706a1.996 1.996 0 0 0 1.08-2.92Zm-6.845 6.733a3.973 3.973 0 0 1-3.415-1.945l-.46-.766V23.9c.422-.074.84-.182 1.236-.314h.01l4.335-1.446a5 5 0 0 0 3.419-4.743v-4.559l-3.845 1.282a4.022 4.022 0 0 1-1.28.209Z"/></svg>
  