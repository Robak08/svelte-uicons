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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 2a10.008 10.008 0 0 1 9.3 6.338l-7.276 1.455a10.705 10.705 0 0 1-4.19 0l-7.14-1.428A10.009 10.009 0 0 1 12 2ZM2 12.107l4.155.831a4 4 0 0 1 2.733 2.018l.625 1.153a4.006 4.006 0 0 1 .482 1.9V21.8a10.014 10.014 0 0 1-7.99-9.693ZM14 21.8v-3.787a4.006 4.006 0 0 1 .482-1.9l.625-1.153a4 4 0 0 1 2.733-2.018l4.16-.835a10.014 10.014 0 0 1-8 9.693Z"/></svg>
  