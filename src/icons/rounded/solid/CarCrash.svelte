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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.055 17.042a1 1 0 1 1-1.855-.752l.33-.812-6.647-2.658-.328.81a1 1 0 0 1-1.855-.752l.325-.8-3.515-1.406a9.009 9.009 0 0 0-.853 1.59s-.428.77-.445.811a3.441 3.441 0 0 0 .087 2.58 3.24 3.24 0 0 0 .728 1.053l-.035.089a2.491 2.491 0 0 0 4.58 1.958l4.818 1.934a2.5 2.5 0 0 0 4.678 1.735l.018-.043A2.979 2.979 0 0 0 23 20.5l.412-1.04a8.914 8.914 0 0 0 .5-1.828l-3.526-1.41ZM11.628 6.253a4.933 4.933 0 0 1 5.072-.875l3.965 1.541A4.473 4.473 0 0 1 23.5 11s.514 4.455.518 4.517L7.871 9.062c.029-.026 3.757-2.809 3.757-2.809ZM6.508 7.6a20.432 20.432 0 0 0-1.663 1.964 11.015 11.015 0 0 0-.991 1.826c-.164.294-.268.482-.337.61H1a1 1 0 0 1-.768-1.64l1.591-1.909a.7.7 0 0 0 0-.9L.232 5.64A1 1 0 0 1 1 4h2.3a.705.705 0 0 0 .7-.7V1A1 1 0 0 1 5.64.232l1.909 1.591a.7.7 0 0 0 .9 0L10.36.232A1 1 0 0 1 12 1v2.659A6.643 6.643 0 0 0 10.368 4.7L6.507 7.6Z"/></svg>
  