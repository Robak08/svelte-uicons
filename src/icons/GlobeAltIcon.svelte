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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-globe-alt {customClass}"><path d="M13 16a8 8 0 1 0-8-8 8.009 8.009 0 0 0 8 8zm0-14a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6zm9.907 12.773A11.992 11.992 0 0 1 14 19.939V22h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4v-2.051A11.994 11.994 0 0 1 3.743.363a1 1 0 0 1 1.542 1.274 10 10 0 1 0 15.971 12.006 1 1 0 0 1 1.651 1.13z"/></svg>
  