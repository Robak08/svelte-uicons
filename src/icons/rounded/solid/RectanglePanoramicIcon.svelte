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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.5 5h-13A5.506 5.506 0 0 0 0 10.5v3A5.506 5.506 0 0 0 5.5 19h13a5.506 5.506 0 0 0 5.5-5.5v-3A5.506 5.506 0 0 0 18.5 5Zm2.5 8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 13.5v-3A2.5 2.5 0 0 1 5.5 8h13a2.5 2.5 0 0 1 2.5 2.5Z"/></svg>
  