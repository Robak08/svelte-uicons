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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.466 8.465-6.93-6.931a5.008 5.008 0 0 0-7.072 0l-6.93 6.931a5 5 0 0 0 0 7.07l6.93 6.931a5.007 5.007 0 0 0 7.072 0l6.93-6.931a5 5 0 0 0 0-7.07Z"/></svg>
  