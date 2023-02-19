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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-i {customClass}"><path d="M18 22h-5V2h5c1.308-.006 1.307-1.995 0-2H6C4.692.006 4.693 1.995 6 2h5v20H6c-1.308.006-1.307 1.995 0 2h12c1.308-.006 1.307-1.995 0-2Z"/></svg>
  