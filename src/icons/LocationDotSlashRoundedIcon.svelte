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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-location-dot-slash {customClass}"><path d="M16.635 20.321a1 1 0 0 1-.056 1.413l-.793.732c-1.003.981-2.355 1.533-3.787 1.533s-2.783-.552-3.807-1.553l-3.943-3.642C1.315 15.871.273 11.626 1.504 7.701a1 1 0 1 1 1.908.598 8.981 8.981 0 0 0 2.224 9.065l3.935 3.634c1.337 1.307 3.542 1.287 4.837.02l.813-.752a1.001 1.001 0 0 1 1.413.056Zm7.072 3.386a.997.997 0 0 1-1.414 0l-22-22A.999.999 0 1 1 1.707.293l2.725 2.725A10.924 10.924 0 0 1 12 0c2.938 0 5.7 1.145 7.778 3.222 4.22 4.22 4.288 11.043.204 15.347l3.725 3.725a.999.999 0 0 1 0 1.414ZM5.846 4.432l3.54 3.54A4.01 4.01 0 0 1 12 7a4.004 4.004 0 0 1 3.029 6.615l3.539 3.539c3.303-3.497 3.244-9.07-.205-12.519a8.945 8.945 0 0 0-6.364-2.636 8.943 8.943 0 0 0-6.154 2.432Zm7.761 7.761A2.002 2.002 0 0 0 12 9c-.432 0-.85.141-1.191.395l2.799 2.799Z"/></svg>
  