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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 511.786 511.786"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M213.382 426.694a212.415 212.415 0 0 0 134.976-48.171l127.275 127.253c8.475 8.185 21.98 7.95 30.165-.525 7.984-8.267 7.984-21.373 0-29.641L378.545 348.337c74.545-91.24 61.011-225.636-30.229-300.181S122.68-12.855 48.135 78.385-12.876 304.02 78.364 378.566a213.331 213.331 0 0 0 135.018 48.128z"/></svg>
  