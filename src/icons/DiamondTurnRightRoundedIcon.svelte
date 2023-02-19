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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-diamond-turn-right {customClass}"><path d="m22.543 8.481-7.024-7.024a4.984 4.984 0 0 0-7.037 0L1.457 8.481a4.984 4.984 0 0 0 0 7.037l7.024 7.024c.97.97 2.244 1.454 3.519 1.454s2.549-.484 3.519-1.454l7.024-7.024a4.984 4.984 0 0 0 0-7.037Zm-1.414 5.623-7.024 7.024a2.984 2.984 0 0 1-4.209 0l-7.025-7.024a2.982 2.982 0 0 1 0-4.209l7.025-7.024a2.98 2.98 0 0 1 4.209 0l7.024 7.024a2.982 2.982 0 0 1 0 4.209Zm-4.001-5.226a3.002 3.002 0 0 1 0 4.242l-2.421 2.421a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.128-2.128H11a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0v-3c0-1.654 1.346-3 3-3h4.421l-2.128-2.128a.999.999 0 1 1 1.414-1.414l2.421 2.421Z"/></svg>
  