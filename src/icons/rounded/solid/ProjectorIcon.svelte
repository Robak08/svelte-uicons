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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 11c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5Zm5 4v2a5.008 5.008 0 0 1-3 4.582V23a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-1.418A5.008 5.008 0 0 1 0 17v-2c0-2.757 2.243-5 5-5h2.072A7.027 7.027 0 0 0 7 11c0 3.859 3.14 7 7 7s7-3.141 7-7c0-.2-.009-.398-.025-.593A5.006 5.006 0 0 1 24 15Zm-19-.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 5 14.5ZM14 4a1 1 0 0 0 1-1V1a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1Zm3.945.832a1.002 1.002 0 0 0 1.387-.277l1-1.5a1 1 0 1 0-1.664-1.11l-1 1.5a1 1 0 0 0 .277 1.387Zm-9.277-.277a1 1 0 1 0 1.664-1.11l-1-1.5a1 1 0 0 0-1.664 1.11l1 1.5Z"/></svg>
  