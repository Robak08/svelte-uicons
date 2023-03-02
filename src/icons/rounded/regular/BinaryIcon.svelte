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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 4c0-2.21-1.79-4-4-4S4 1.79 4 4v3c0 2.21 1.79 4 4 4s4-1.79 4-4V4Zm-2 3c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2s2 .9 2 2v3Zm6 6c-2.21 0-4 1.79-4 4v3c0 2.21 1.79 4 4 4s4-1.79 4-4v-3c0-2.21-1.79-4-4-4Zm2 7c0 1.1-.9 2-2 2s-2-.9-2-2v-3c0-1.1.9-2 2-2s2 .9 2 2v3ZM14.85 4.15a.996.996 0 0 1 0-1.41L17.29.29c.29-.29.72-.37 1.09-.22.37.15.62.52.62.92V10c0 .55-.45 1-1 1s-1-.45-1-1V3.41l-.74.74a.996.996 0 0 1-1.41 0ZM9 14v9c0 .55-.45 1-1 1s-1-.45-1-1v-6.59l-.74.74a.996.996 0 1 1-1.41-1.41l2.44-2.44c.29-.29.72-.37 1.09-.22.37.15.62.52.62.92Z"/></svg>
  