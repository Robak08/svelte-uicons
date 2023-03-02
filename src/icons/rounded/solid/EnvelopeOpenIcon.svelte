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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1.225 8.467c.106-.123 7.255-7.018 7.255-7.018a5.026 5.026 0 0 1 7.055.015s7.134 6.88 7.239 7l-8.653 8.654a3.074 3.074 0 0 1-4.242 0Zm14.31 10.069a5.024 5.024 0 0 1-7.07 0L.229 10.3A4.962 4.962 0 0 0 0 11.708V19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-7.292a4.962 4.962 0 0 0-.229-1.408Z"/></svg>
  