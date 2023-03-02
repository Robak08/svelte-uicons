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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.71 17.71-1.29 1.3 1.29 1.28a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29L19 20.42l-1.27 1.28c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l1.27-1.28-1.29-1.28a.996.996 0 1 1 1.41-1.41l1.29 1.28 1.29-1.3a.996.996 0 1 1 1.41 1.41ZM19 3h-6.53c-.15 0-.31-.04-.45-.11L8.86 1.31C8.45 1.1 7.98.99 7.52.99H4.99A5.015 5.015 0 0 0 0 6v1h23.9A5 5 0 0 0 19 3Zm-6 16c0-3.31 2.69-6 6-6 2.09 0 3.93 1.07 5 2.68V9H0v9c0 2.76 2.24 5 5 5h9.53A5.97 5.97 0 0 1 13 19Z"/></svg>
  