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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.42 20.656a3.77 3.77 0 0 1-2.233-.735l-6.641-4.87a3.784 3.784 0 0 1 0-6.1l6.641-4.87A3.783 3.783 0 0 1 14.2 6.853l3.782-2.774A3.784 3.784 0 0 1 24 7.13v9.74a3.784 3.784 0 0 1-6.021 3.051L14.2 17.147a3.79 3.79 0 0 1-3.777 3.509Zm2.787-6.475a1 1 0 0 1 .592.194l5.363 3.933A1.784 1.784 0 0 0 22 16.87V7.13a1.785 1.785 0 0 0-2.839-1.438L13.8 9.625a1 1 0 0 1-1.592-.806V7.13a1.784 1.784 0 0 0-2.839-1.438l-6.64 4.87a1.783 1.783 0 0 0 0 2.876l6.64 4.87a1.784 1.784 0 0 0 2.838-1.438v-1.689a1 1 0 0 1 1-1Z"/></svg>
  