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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 9h-5a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h5a5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5Zm-5 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm5 5a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM15.6 5l-3.531-3.538a5.006 5.006 0 0 0-7.069 0L1.462 5a5.006 5.006 0 0 0 0 7.071L5 15.6a4.961 4.961 0 0 0 2 1.223V14a7.008 7.008 0 0 1 7-7h2.827A4.961 4.961 0 0 0 15.6 5ZM5 10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/></svg>
  