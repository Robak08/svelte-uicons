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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.679.156a2.219 2.219 0 0 0-2.445.558L.266 22.321a1 1 0 0 0 1.469 1.357l5.178-5.6C19.92 16.92 24.011 6.243 24 2.5A2.2 2.2 0 0 0 22.679.156ZM22 2.5c0 1.876-2.321 11.13-12.939 13.25L21.694 2.08a.226.226 0 0 1 .245-.066c.109.007.045.41.061.486Z"/></svg>
  