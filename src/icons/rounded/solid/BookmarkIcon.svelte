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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.849 23.55a2.954 2.954 0 0 0 3.266-.644L12 17.053l5.885 5.853a2.956 2.956 0 0 0 2.1.881 3.05 3.05 0 0 0 1.17-.237A2.953 2.953 0 0 0 23 20.779V5a5.006 5.006 0 0 0-5-5H6a5.006 5.006 0 0 0-5 5v15.779a2.953 2.953 0 0 0 1.849 2.771Z"/></svg>
  