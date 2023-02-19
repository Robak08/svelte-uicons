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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-images {customClass}"><path d="M9 5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S11.33 7 10.5 7 9 6.33 9 5.5ZM24 5v6c0 2.76-2.24 5-5 5h-9c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h9c2.76 0 5 2.24 5 5ZM7 11c0 .77.29 1.47.77 2.01l5.24-5.24c.98-.98 2.69-.98 3.67 0l1.04 1.04c.23.23.62.23.85 0L22 5.38V5c0-1.65-1.35-3-3-3h-9C8.35 2 7 3.35 7 5v6Zm15 0V8.21l-2.02 2.02c-.98.98-2.69.98-3.67 0l-1.04-1.04a.61.61 0 0 0-.85 0l-4.79 4.79c.12.02.24.02.37.02h9c1.65 0 3-1.35 3-3Zm-3.91 7.04c-.53-.15-1.08.17-1.23.7l-.29 1.06c-.21.77-.71 1.42-1.41 1.81-.7.4-1.51.5-2.28.29L4.2 19.52a3 3 0 0 1-2.1-3.69l.96-3.56c.14-.53-.17-1.08-.7-1.23-.53-.14-1.08.17-1.23.7l-.95 3.55a5.01 5.01 0 0 0 3.5 6.15l8.68 2.38c.44.12.89.18 1.33.18.86 0 1.7-.22 2.47-.66a4.984 4.984 0 0 0 2.35-3.02l.29-1.06c.15-.53-.17-1.08-.7-1.23Z"/></svg>
  