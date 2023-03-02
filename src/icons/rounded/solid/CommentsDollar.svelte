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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.364 2.636A9.03 9.03 0 0 0 8.349.023C3.823.342 0 4.588 0 9.294v5.04C0 16.866 1.507 18 3 18h5.703c4.708 0 8.955-3.823 9.274-8.349a9.013 9.013 0 0 0-2.613-7.015ZM7.644 7.76l3.042.507A2.762 2.762 0 0 1 13.001 11c0 1.654-1.346 3-3 3v1a1 1 0 1 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499A1 1 0 0 1 6.866 11.5c.178.308.511.5.867.5h2.268c.551 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.042-.507A2.762 2.762 0 0 1 5 7c0-1.654 1.346-3 3-3V3a1 1 0 0 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 0 1-1.731 1.001 1.004 1.004 0 0 0-.867-.5H8c-.551 0-1 .449-1 1 0 .378.271.698.644.76ZM24 16v5a3 3 0 0 1-3 3h-5c-2.955 0-5.535-1.615-6.92-4.004l.004-.004c5.564-.202 10.507-4.79 10.888-10.2.017-.237.025-.474.026-.71 2.388 1.386 4.001 3.965 4.001 6.918Z"/></svg>
  