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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2V1a1 1 0 1 0-2 0v1h-6V1a1 1 0 1 0-2 0v1C6.243 2 4 4.243 4 7v8c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5Zm3 13c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3V9h16v6ZM6 7c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3H6Zm14 16a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V8a1 1 0 1 1 2 0v11c0 1.654 1.346 3 3 3h14a1 1 0 0 1 1 1Z"/></svg>
  