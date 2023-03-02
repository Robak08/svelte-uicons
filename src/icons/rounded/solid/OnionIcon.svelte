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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 7.646A13.451 13.451 0 0 1 14 15c0 2.088-.761 5-2 5s-2-2.912-2-5a13.451 13.451 0 0 1 2-7.354Zm3-4.5A2.63 2.63 0 0 0 12.5 0h-1A2.628 2.628 0 0 0 9 3.141c-2.291 3.5-7.441 13.1-.289 15.952C6.453 13.26 10 6.217 11.293 5.293a1 1 0 0 1 1.414 0c1.312.943 4.835 7.989 2.582 13.8C22.442 16.244 17.291 6.639 15 3.147Zm-.389 18.376.944.645A1.006 1.006 0 0 1 15 24c-.447.066-1.627-.94-2-1.132a1.006 1.006 0 1 1-2 0c-.381.2-1.546 1.194-2 1.132a1.006 1.006 0 0 1-.556-1.832l1.029-.618C-2.707 20.882-2.41 7.45 6.088 4.06 4.647 6.65 3 10.4 3 14c0 5.7 6.352 8 9 8s9-2.3 9-8c0-3.6-1.645-7.342-3.086-9.932 8.518 3.371 8.736 16.807-3.303 17.455Z"/></svg>
  