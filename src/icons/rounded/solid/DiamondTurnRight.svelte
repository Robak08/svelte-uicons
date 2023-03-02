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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.543 8.481-7.024-7.024a4.984 4.984 0 0 0-7.037 0L1.457 8.481a4.984 4.984 0 0 0 0 7.037l7.024 7.024c.97.97 2.244 1.454 3.519 1.454s2.549-.484 3.519-1.454l7.024-7.024a4.984 4.984 0 0 0 0-7.037Zm-5.415 4.64-2.421 2.421a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L15.421 12H10a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0v-3c0-1.654 1.346-3 3-3h5.421l-2.128-2.128a.999.999 0 1 1 1.414-1.414l2.421 2.421a3.002 3.002 0 0 1 0 4.242Z"/></svg>
  