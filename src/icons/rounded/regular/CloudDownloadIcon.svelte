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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.746 20.334a1 1 0 0 1-.081 1.413l-1.586 1.414a2.9 2.9 0 0 1-2.064.839 3.013 3.013 0 0 1-2.136-.882l-1.544-1.374a1 1 0 0 1 1.33-1.494L14 21.444V14a1 1 0 0 1 2 0v7.445l1.335-1.192a1 1 0 0 1 1.411.081zm-.39-12.973a1.088 1.088 0 0 1-.722-.735 8 8 0 0 0-15.489.842 7.657 7.657 0 0 0 .8 5.18A5.448 5.448 0 0 0 .057 18.3 5.843 5.843 0 0 0 5.683 23H8a1 1 0 0 0 0-2H5.683a3.81 3.81 0 0 1-3.646-2.982 3.469 3.469 0 0 1 1.834-3.6 1.993 1.993 0 0 0 .793-2.685 6 6 0 1 1 11.06-4.513 3.1 3.1 0 0 0 2.045 2.052 5.971 5.971 0 0 1 4.212 6.21 5.377 5.377 0 0 1-1.111 2.909 1 1 0 0 0 1.586 1.219 7.466 7.466 0 0 0 1.52-3.972 7.96 7.96 0 0 0-5.62-8.277z"/></svg>
  