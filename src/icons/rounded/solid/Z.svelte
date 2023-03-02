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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 24H5.912a3.862 3.862 0 0 1-3.723-2.698c-.537-1.64.016-3.358 1.407-4.379L19.222 5.464c.827-.606.897-1.505.688-2.144-.209-.638-.797-1.32-1.822-1.32H3a1 1 0 1 1 0-2h15.088a3.862 3.862 0 0 1 3.723 2.698c.537 1.64-.016 3.358-1.407 4.379L4.778 18.536c-.827.606-.897 1.505-.688 2.144.209.638.797 1.32 1.822 1.32H21a1 1 0 1 1 0 2Z"/></svg>
  