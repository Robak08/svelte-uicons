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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24H2.988c-1.655 0-3-1.346-3-3V1c.006-1.308 1.994-1.307 2 0v20c0 .552.449 1 1 1H23c1.308.006 1.307 1.995 0 2Zm-9-11c.006 1.308 1.994 1.308 2 0-.006-1.308-1.994-1.308-2 0Zm6-6c.006 1.308 1.994 1.308 2 0-.006-1.308-1.994-1.308-2 0Zm-9 11c.006 1.308 1.994 1.308 2 0-.006-1.308-1.994-1.308-2 0Zm9-1c.006 1.308 1.994 1.308 2 0-.006-1.308-1.994-1.308-2 0ZM9 5c.006 1.308 1.994 1.308 2 0-.006-1.308-1.994-1.308-2 0Zm-4 7c.006 1.308 1.994 1.308 2 0-.006-1.308-1.994-1.308-2 0Z"/></svg>
  