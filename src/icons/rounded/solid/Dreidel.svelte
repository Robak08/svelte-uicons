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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.848 23.894A5.047 5.047 0 0 1 8.816 24H5a5.006 5.006 0 0 1-5-5v-3.816a4.988 4.988 0 0 1 .107-1.033l.507.507A6.882 6.882 0 0 0 5.442 17a8.05 8.05 0 0 0 1.732-.182A7.905 7.905 0 0 0 7 18.5a6.93 6.93 0 0 0 2.293 4.838ZM23.707.293a1 1 0 0 0-1.414 0L14.96 7.626 13.8 6.465a5.008 5.008 0 0 0-7.067-.006l-5.268 5.188a5.043 5.043 0 0 0-.481.556l1.09 1.09A4.97 4.97 0 0 0 5.442 15a4.552 4.552 0 0 0 3.272-1.128l2.579-2.579a1 1 0 0 1 1.414 1.414l-2.579 2.579A4.386 4.386 0 0 0 9 18.5a5.1 5.1 0 0 0 1.662 3.382l1.138 1.134a5.14 5.14 0 0 0 .561-.486l5.177-5.258a5.006 5.006 0 0 0 0-7.071L16.374 9.04l7.333-7.333a1 1 0 0 0 0-1.414Z"/></svg>
  