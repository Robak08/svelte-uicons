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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.351 10.253a17.026 17.026 0 0 0-.619-.67L20.487 7.3a1 1 0 0 0-1.426 1.4l2.251 2.29.008.01H13V2.745l2.233 2.194a1 1 0 0 0 1.4-1.426l-2.279-2.24A17.552 17.552 0 0 0 13.68.65a2.575 2.575 0 0 0-1.652-.644A.28.28 0 0 0 12 0h-.011a2.584 2.584 0 0 0-1.736.647c-.263.233-.513.462-.67.619L7.3 3.513a1 1 0 1 0 1.4 1.426l2.29-2.251.01-.008V11H2.68l.015-.015L4.939 8.7a1 1 0 1 0-1.426-1.4L1.274 9.577c-.163.163-.392.413-.624.675A2.581 2.581 0 0 0 0 11.989V12c0 .01.005.019.006.029a2.573 2.573 0 0 0 .644 1.653c.233.262.461.512.618.67l2.245 2.284a1 1 0 0 0 1.426-1.4L2.744 13H11v8.32l-.015-.014L8.7 19.062a1 1 0 1 0-1.4 1.425l2.278 2.239c.163.163.413.391.675.624a2.587 2.587 0 0 0 3.43 0c.262-.233.511-.46.669-.619l2.284-2.244a1 1 0 1 0-1.4-1.425L13 21.256V13h8.256l-2.2 2.233a1 1 0 1 0 1.426 1.4l2.239-2.279c.163-.163.391-.413.624-.675a2.589 2.589 0 0 0 .006-3.426Z"/></svg>
  