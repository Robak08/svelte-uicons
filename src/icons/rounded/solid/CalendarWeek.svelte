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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.001 17H5v-2h14v2Zm0-15h-1V1a1 1 0 0 0-2 0v1h-8V1a1 1 0 0 0-2 0v1h-1A5.006 5.006 0 0 0 0 7v1h24V7c0-2.757-2.243-5-5-5ZM0 10h24v9c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-9Zm3 7c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v2Z"/></svg>
  