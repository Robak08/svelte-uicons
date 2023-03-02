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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.792 1.61 13.262 14H18a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v3a1 1 0 0 1-2 0v-3H6a1 1 0 0 1 0-2h5v-2H6a1 1 0 0 1 0-2h4.738L1.208 1.61A1 1 0 0 1 2.792.39L12 12.36 21.208.39a1 1 0 1 1 1.584 1.22z"/></svg>
  