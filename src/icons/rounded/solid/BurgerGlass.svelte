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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24.06 16.49v.5h-15v-.5c0-2.49 2.01-4.5 4.5-4.5h6c2.49 0 4.5 2.01 4.5 4.5Zm-5.8 4.33c-.17.11-.36.17-.55.17s-.39-.06-.55-.17l-2.75-1.83H9.07v.5c0 2.49 2.01 4.5 4.5 4.5h6c2.49 0 4.5-2.01 4.5-4.5v-.5h-3.05l-2.75 1.83Zm-.28-17.49A2.991 2.991 0 0 0 15-.01H3C2.15.01 1.33.38.76 1.01a2.98 2.98 0 0 0-.74 2.33L.19 5h17.62l.17-1.66ZM7.06 19.49v-3c0-3.58 2.92-6.5 6.5-6.5h3.75l.3-2.99H.39l1.26 12.5c.26 2.55 2.41 4.5 4.97 4.5h2.27a6.477 6.477 0 0 1-1.83-4.51Z"/></svg>
  