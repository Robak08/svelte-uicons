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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><g xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" inkscape:version="0.48.1 r9760"><path d="M12.973 11.078h-4V7.212h4c.667 0 1.177.145 1.53.431.353.286.529.785.529 1.49 0 .628-.196 1.106-.588 1.443-.393.338-.883.502-1.471.502zM15.659 14.996c0 .706-.208 1.255-.619 1.639-.408.388-.989.58-1.733.58H8.972v-4.377h4.334c.745 0 1.318.18 1.733.557.416.377.62.907.62 1.601z"/><path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2.184 16.851c-.196.478-.502.89-.922 1.235-.42.345-.953.62-1.608.824-.655.204-1.432.306-2.333.306H6.522v-14h6.804c1.255 0 2.263.286 3.02.863.757.577 1.137 1.443 1.137 2.608 0 .706-.172 1.31-.518 1.812-.345.502-.839.894-1.482 1.169v.039c.863.184 1.518.592 1.961 1.223.443.635.667 1.427.667 2.384a4.011 4.011 0 0 1-.295 1.537z"/></g></svg>
  