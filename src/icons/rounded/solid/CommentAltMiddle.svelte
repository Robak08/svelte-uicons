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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.009 23.665a2.01 2.01 0 0 1-1.338-.508L6.923 20H4c-2.206 0-4-1.794-4-4V4c0-2.206 1.794-4 4-4h16c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4h-2.852l-3.847 3.18a1.938 1.938 0 0 1-1.292.485Z"/></svg>
  