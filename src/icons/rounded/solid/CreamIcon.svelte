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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 24H5a5.006 5.006 0 0 1-5-5v-2a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v2a5.006 5.006 0 0 1-5 5zm3-12v-2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2zm-3.039-6A12.664 12.664 0 0 0 17.339.406a.994.994 0 0 0-1.692.15 3.938 3.938 0 0 1-3.685 2.457H10A4.506 4.506 0 0 0 5.412 6z"/></svg>
  