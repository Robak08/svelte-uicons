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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 0a1 1 0 0 0-1 1v1h-2V1a1 1 0 1 0-2 0v1h-2V1a1 1 0 1 0-2 0v3.5c0 1.393.819 2.599 2 3.162V11H8V7.662A3.506 3.506 0 0 0 10 4.5V1a1 1 0 1 0-2 0v1H6V1a1 1 0 1 0-2 0v1H2V1a1 1 0 1 0-2 0v3.5c0 1.393.819 2.599 2 3.162V20c0 2.206 1.794 4 4 4h12c2.206 0 4-1.794 4-4V7.662A3.506 3.506 0 0 0 24 4.5V1a1 1 0 0 0-1-1Zm-7 13v9h-2v-4a2 2 0 1 0-4 0v4H8v-9h8ZM8 4v.5C8 5.327 7.327 6 6.5 6h-3C2.673 6 2 5.327 2 4.5V4h6ZM4 20V8h2v14c-1.103 0-2-.897-2-2Zm14 2V8h2v12c0 1.103-.897 2-2 2Zm2.5-16h-3c-.827 0-1.5-.673-1.5-1.5V4h6v.5c0 .827-.673 1.5-1.5 1.5Z"/></svg>
  