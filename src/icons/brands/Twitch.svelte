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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 0 1.714 4.286v15.429h5.143V24l4.286-4.286h3.429L22.286 12V0H6zm14.571 11.143-3.429 3.429h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z"/><path d="M16.286 4.714H18V9.857H16.286z"/><path d="M11.571 4.714H13.285V9.857H11.571z"/></svg>
  