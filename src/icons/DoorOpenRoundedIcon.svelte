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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-door-open {customClass}"><path d="M23 22h-3V6c0-2.206-1.794-4-4-4h-.535a3.996 3.996 0 0 0-.929-1.092 3.987 3.987 0 0 0-3.32-.829L8.019.718A5.013 5.013 0 0 0 4 5.621V22H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2ZM16 4c1.103 0 2 .897 2 2v16h-2V4ZM6 5.621a3.007 3.007 0 0 1 2.411-2.942l3.196-.639a1.99 1.99 0 0 1 1.661.415c.465.381.731.944.731 1.546V22H6V5.621Zm6 6.879a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 12 12.5Z"/></svg>
  