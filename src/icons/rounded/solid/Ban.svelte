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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256c.153 141.322 114.678 255.847 256 256zm213.333-256c.1 117.726-95.256 213.243-212.982 213.343a213.162 213.162 0 0 1-135.263-48.266l299.989-299.989A212.238 212.238 0 0 1 469.333 256zM256 42.667a212.249 212.249 0 0 1 134.912 48.256L90.923 390.912c-74.604-91.07-61.256-225.375 29.814-299.98A213.161 213.161 0 0 1 256 42.667z"/></svg>
  