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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.1 19a1 1 0 0 1-.7-1.71l4.6-4.58a1 1 0 0 0 0-1.42l-4.6-4.58a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l4.59 4.59a3 3 0 0 1 0 4.24l-4.59 4.59a1 1 0 0 1-.71.29Z"/><path d="M6.1 19a1 1 0 0 1-.7-1.71L10.69 12 5.4 6.71a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l6 6a1 1 0 0 1 0 1.42l-6 6a1 1 0 0 1-.71.29Z"/></svg>
  