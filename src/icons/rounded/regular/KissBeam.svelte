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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.244 20 0a10.011 10.011 0 0 1-10 10ZM9 10c0-1.054-.68-2-1-2s-1 .946-1 2a1 1 0 0 1-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-2 0Zm10 0a1 1 0 0 1-2 0c0-1.054-.68-2-1-2s-1 .946-1 2a1 1 0 0 1-2 0c.248-5.285 5.753-5.282 6 0Zm-4 4.5a2.5 2.5 0 0 0-2.5-2.5h-1.731a1 1 0 0 0 0 2H12.5a.5.5 0 0 1 0 1H12a1 1 0 0 0 0 2h.5a.5.5 0 0 1 0 1h-1.731a1 1 0 0 0 0 2H12.5a2.507 2.507 0 0 0 1.987-4A2.471 2.471 0 0 0 15 14.5Z"/></svg>
  