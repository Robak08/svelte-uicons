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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-9H0v9Zm3-4c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2H5c-1.103 0-2-.897-2-2v-2Zm4.001 2H5v-2h2v2ZM24 7v1H0V7c0-2.757 2.243-5 5-5h1V1a1 1 0 0 1 2 0v1h8V1a1 1 0 0 1 2 0v1h1c2.757 0 5 2.243 5 5Z"/></svg>
  