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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 19a9.454 9.454 0 0 1-5.666-2.254 1 1 0 0 1 1.332-1.492 6.359 6.359 0 0 0 8.67 0 1 1 0 0 1 1.33 1.493A9.454 9.454 0 0 1 12 19Zm-2.5-8a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm5 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm9.5 7.5a5.483 5.483 0 0 0-2.139-4.329 4.982 4.982 0 0 0-1.9-5.178 3.514 3.514 0 0 0-3.071-3.972C16.408 2.747 14.4 0 12 0a1 1 0 0 0-1 1 4.1 4.1 0 0 1-2.194 4H7.5a3.51 3.51 0 0 0-3.465 3.993 4.981 4.981 0 0 0-1.9 5.178A5.5 5.5 0 0 0 5.5 24h13a5.506 5.506 0 0 0 5.5-5.5ZM9 7a1 1 0 0 0 .316-.052A5.773 5.773 0 0 0 12.9 2.309 5.237 5.237 0 0 1 15 6a1 1 0 0 0 1 1h.5a1.505 1.505 0 0 1 1.385 2.071 1 1 0 0 0 .469 1.272 2.985 2.985 0 0 1 1.4 3.842 1 1 0 0 0 .433 1.271A3.5 3.5 0 0 1 18.5 22h-13a3.5 3.5 0 0 1-1.687-6.544 1 1 0 0 0 .433-1.271 2.985 2.985 0 0 1 1.4-3.842 1 1 0 0 0 .469-1.272A1.505 1.505 0 0 1 7.5 7Zm8-1Z"/></svg>
  