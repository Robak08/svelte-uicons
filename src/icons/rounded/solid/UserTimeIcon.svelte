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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 10a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7zm2.707 9.707a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 16 17v-3a1 1 0 0 1 2 0v2.586l1.707 1.707a1 1 0 0 1 0 1.414zM8.474 11a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5zm2.882 13H1a1 1 0 0 1-1-1.011 10.275 10.275 0 0 1 6.553-9.6 6.685 6.685 0 0 1 2.394-.384 9.087 9.087 0 0 0-.424.995A8.853 8.853 0 0 0 8 17a8.983 8.983 0 0 0 3.356 7z"/></svg>
  