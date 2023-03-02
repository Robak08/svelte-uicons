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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 511.991 511.991"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M286.161 255.867 505.745 36.283c8.185-8.474 7.951-21.98-.523-30.165-8.267-7.985-21.375-7.985-29.642 0L255.995 225.702 36.411 6.118c-8.475-8.185-21.98-7.95-30.165.524-7.985 8.267-7.985 21.374 0 29.641L225.83 255.867 6.246 475.451c-8.328 8.331-8.328 21.835 0 30.165 8.331 8.328 21.835 8.328 30.165 0l219.584-219.584 219.584 219.584c8.331 8.328 21.835 8.328 30.165 0 8.328-8.331 8.328-21.835 0-30.165L286.161 255.867z"/></svg>
  