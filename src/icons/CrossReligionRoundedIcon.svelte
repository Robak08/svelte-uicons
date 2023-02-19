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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cross-religion {customClass}"><path d="M12 24c-2.206 0-4-1.794-4-4v-6H6c-2.206 0-4-1.794-4-4s1.794-4 4-4h2V4c0-2.206 1.794-4 4-4s4 1.794 4 4v2h2c2.206 0 4 1.794 4 4s-1.794 4-4 4h-2v6c0 2.206-1.794 4-4 4ZM6 8c-1.103 0-2 .897-2 2s.897 2 2 2h3a1 1 0 0 1 1 1v7c0 1.103.897 2 2 2s2-.897 2-2v-7a1 1 0 0 1 1-1h3c1.103 0 2-.897 2-2s-.897-2-2-2h-3a1 1 0 0 1-1-1V4c0-1.103-.897-2-2-2s-2 .897-2 2v3a1 1 0 0 1-1 1H6Z"/></svg>
  