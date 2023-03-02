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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm1 6h16a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2Zm16 3H1a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Zm-2 5H1a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Zm9 1c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.304.836-2.415 2-2.828V5c0-1.654-1.346-3-3-3H1a1 1 0 1 1 0-2h16c2.757 0 5 2.243 5 5v13.172c1.164.413 2 1.524 2 2.828Zm-2 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/></svg>
  