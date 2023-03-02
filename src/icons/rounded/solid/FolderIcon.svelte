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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 191.808V384c.071 58.881 47.786 106.596 106.667 106.667h298.667C464.214 490.596 511.93 442.881 512 384V189.44L0 191.808zM405.333 64H266.069a21.746 21.746 0 0 1-9.536-2.133l-67.328-33.792a64.291 64.291 0 0 0-28.608-6.741h-53.931C47.786 21.404.071 69.119 0 128v21.141l509.077-2.368C497.961 98.408 454.959 64.099 405.333 64z"/></svg>
  