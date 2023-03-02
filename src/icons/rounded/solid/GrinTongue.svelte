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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm3.5 8a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3Zm8.5 8h-2v.6c-.133 4.495-5.869 4.49-6 0V16H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm-6 0h2v.6c-.062 1.839-1.938 1.837-2 0Z"/></svg>
  