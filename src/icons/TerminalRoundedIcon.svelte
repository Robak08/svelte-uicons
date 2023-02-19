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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-terminal {customClass}"><path d="M9.13 9.89a3.006 3.006 0 0 1 0 4.23L1.72 21.7c-.2.2-.46.3-.72.3s-.5-.09-.7-.29a.996.996 0 0 1-.02-1.41l7.41-7.59c.4-.4.4-1.03 0-1.42L.28 3.7C-.11 3.3-.1 2.67.3 2.29s1.03-.38 1.41.02L9.12 9.9ZM23 20H11c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1Z"/></svg>
  