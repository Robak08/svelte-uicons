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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.836.028A12 12 0 0 0 .029 12.855C.47 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5v-6.66A12.209 12.209 0 0 0 12.836.028ZM18.7 9.712l-6.793 6.707a2 2 0 0 1-2.823 0L5.3 12.715a1 1 0 0 1 1.4-1.43l3.793 3.707 6.806-6.7a1 1 0 0 1 1.4 1.424Z"/></svg>
  