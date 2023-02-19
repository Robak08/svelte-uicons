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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-mug-hot {customClass}"><path d="M19.5 10H19V9a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h8a5.009 5.009 0 0 0 4.9-4 3.6 3.6 0 0 0 4.1-3.5v-3a3.5 3.5 0 0 0-3.5-3.5ZM14 22H6a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3Zm7-5.5a1.621 1.621 0 0 1-2 1.5v-6a1.621 1.621 0 0 1 2 1.5ZM9 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM5 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Z"/></svg>
  