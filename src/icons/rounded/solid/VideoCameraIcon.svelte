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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.021 6.106 9.793 1.879A2.976 2.976 0 0 0 7.672 1H1a1 1 0 0 0 0 2h6.672a1.006 1.006 0 0 1 .707.293L11.086 6H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-8a5.008 5.008 0 0 0-3.979-4.894ZM22.9 8.955a1.987 1.987 0 0 0-2.092.184l-.8.6v10.522l.8.6a2 2 0 0 0 3.2-1.6v-8.518A1.988 1.988 0 0 0 22.9 8.955Z"/></svg>
  