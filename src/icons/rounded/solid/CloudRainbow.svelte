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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 16a1 1 0 0 1-.8-1.6c.659-1.36 5.485-3.848 5.8-1.4a1 1 0 0 1-1 1 3.966 3.966 0 0 0-3.2 1.6 1 1 0 0 1-.8.4Zm-2.707-3a1 1 0 0 1-.745-1.667A10.012 10.012 0 0 1 23 8a1 1 0 0 1 0 2 8.012 8.012 0 0 0-5.963 2.667 1 1 0 0 1-.745.333Zm-2.673-3a1 1 0 0 1-.72-1.692A13.883 13.883 0 0 1 23 4a1 1 0 0 1 0 2 11.9 11.9 0 0 0-8.659 3.692 1 1 0 0 1-.722.308ZM10 8.045A1 1 0 0 1 9.236 6.4 17.974 17.974 0 0 1 23 0a1 1 0 0 1 0 2 15.979 15.979 0 0 0-12.236 5.689 1 1 0 0 1-.764.356ZM7.9 23.984c-3.687-.11-6.613.709-7.773-2.592a3.626 3.626 0 0 1 2-4.258 6 6 0 0 1 11.424-3.471c.137.325.287.359.588.427l.176.042a5.012 5.012 0 0 1 3.559 6 4.949 4.949 0 0 1-3.7 3.7 5.277 5.277 0 0 1-1.066.132c-.878.011-3.093.02-5.208.02Z"/></svg>
  