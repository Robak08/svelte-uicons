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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.707.293a1 1 0 0 0-1.414 0L14.96 7.626 13.8 6.465a5.008 5.008 0 0 0-7.067-.006l-5.268 5.188A4.973 4.973 0 0 0 0 15.184V19a5.006 5.006 0 0 0 5 5h3.816a4.977 4.977 0 0 0 3.542-1.47l5.177-5.258a5.006 5.006 0 0 0 0-7.071L16.374 9.04l7.333-7.333a1 1 0 0 0 0-1.414ZM2 19v-3.14A6.47 6.47 0 0 0 5.442 17a8.05 8.05 0 0 0 1.732-.182A7.905 7.905 0 0 0 7 18.5 6.6 6.6 0 0 0 8.15 22H5a3 3 0 0 1-3-3Zm14.115-3.137-5.177 5.258a3.008 3.008 0 0 1-.585.457A5.044 5.044 0 0 1 9 18.5a4.386 4.386 0 0 1 1.128-3.214l2.579-2.579a1 1 0 0 0-1.414-1.414l-2.579 2.579A4.552 4.552 0 0 1 5.442 15a4.849 4.849 0 0 1-3.023-1.349 3 3 0 0 1 .455-.584l5.268-5.188a3 3 0 0 1 4.243 0l3.736 3.736a3 3 0 0 1-.006 4.248Z"/></svg>
  