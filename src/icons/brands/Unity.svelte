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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.901 14.709v-4.405c0-.195-.15-.3-.3-.195l-4.503 2.597a.432.432 0 0 0-.195.353v5.201c0 .203.15.3.3.203l3.797-2.2 3.707 2.146-9.659 5.576-.022.015-.03-.015-6.536-3.782-3.1-1.801 3.685-2.139 3.805 2.199c.15.098.3-.052.248-.248v-5.208c0-.15-.052-.248-.203-.345l-4.503-2.604c-.098-.053-.3.052-.3.203v4.398l-3.7 2.154V5.606L11.148 0v4.3L7.343 6.507c-.15.045-.15.3 0 .345l4.503 2.604c.105.053.255.098.405 0l4.503-2.604c.15-.045.15-.248 0-.345L12.949 4.3V0l9.659 5.606v11.182l-3.707-2.079z"/></svg>
  