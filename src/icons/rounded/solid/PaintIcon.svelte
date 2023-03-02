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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.748 24a2.755 2.755 0 0 1-2.719-3.151c.259-1.806 1.133-5.134 2.373-6.374A5.037 5.037 0 0 1 9.525 21.6c-1.239 1.239-4.567 2.113-6.374 2.372a2.741 2.741 0 0 1-.403.028zM23.1.9a3.139 3.139 0 0 0-4.33 0L8.27 11.4a6.976 6.976 0 0 1 4.33 4.338L23.1 5.23a3.068 3.068 0 0 0 0-4.33z"/></svg>
  