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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 24c-6.079.117-9.334-7.638-5-11.89V5c.211-6.609 9.791-6.6 10 0v7.11c4.335 4.253 1.077 12.007-5 11.89ZM7 2a3 3 0 0 0-3 3v7.537a1 1 0 0 1-.332.744A5.018 5.018 0 0 0 7 22a5.018 5.018 0 0 0 3.332-8.719 1 1 0 0 1-.332-.744V5a3 3 0 0 0-3-3Zm0 18a3.007 3.007 0 0 1-1-5.829V12a1 1 0 0 1 2 0v2.171A3.007 3.007 0 0 1 7 20Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm8.3-7.308 3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 21.3 7.277L20 8.57V.985a1 1 0 0 0-2 0V8.57l-1.3-1.293a1 1 0 0 0-1.413 1.415Z"/></svg>
  