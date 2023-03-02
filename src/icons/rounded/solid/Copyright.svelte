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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256c.153 141.322 114.678 255.847 256 256zM150.4 150.4c58.363-58.22 152.837-58.22 211.2 0 8.185 8.475 7.95 21.98-.524 30.165-8.267 7.985-21.374 7.985-29.641 0-41.661-41.65-109.199-41.642-150.849.02s-41.642 109.199.02 150.849c41.654 41.643 109.176 41.643 150.83 0 8.475-8.185 21.98-7.95 30.165.525 7.984 8.267 7.984 21.373 0 29.641-58.321 58.321-152.879 58.321-211.2 0-58.322-58.321-58.322-152.879-.001-211.2z"/></svg>
  