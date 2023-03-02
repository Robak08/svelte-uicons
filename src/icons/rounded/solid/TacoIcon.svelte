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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 8.567C14.97 2.814 4.893 7.4 5 15.791V19.5a1.5 1.5 0 0 1-3 0v-4.226a7.486 7.486 0 0 1 1.626-4.65 1 1 0 0 0-1.563-1.247C-.336 12.054-.036 16.165 0 19.5A3.5 3.5 0 0 0 3.5 23H19a5.006 5.006 0 0 0 5-5v-2.5a9.536 9.536 0 0 0-3-6.933ZM16 20a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm2-3a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm2 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2ZM5.215 8.178a3.839 3.839 0 0 1 3.042-5.115 3.315 3.315 0 0 1 3.8-1.947 3.23 3.23 0 0 1 4.918-.011 3.308 3.308 0 0 1 3.768 1.958 3.927 3.927 0 0 1 2.929 5.525c-4.2-6.042-14.026-6.02-18.22-.072a3.113 3.113 0 0 0-.237-.338Z"/></svg>
  