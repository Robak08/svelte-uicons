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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 23a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm4.535-2.122a1 1 0 0 0 0-1.414 5 5 0 0 0-7.07 0 1 1 0 0 0 1.414 1.414 3.074 3.074 0 0 1 4.242 0 1 1 0 0 0 1.414 0zm2.829-2.828a1 1 0 0 0 0-1.414 9.01 9.01 0 0 0-12.728 0A1 1 0 0 0 7.05 18.05a7.011 7.011 0 0 1 9.9 0 1 1 0 0 0 1.414 0zM5.987 22.161a1 1 0 0 0-.826-1.148 3.809 3.809 0 0 1-3.124-2.939A3.473 3.473 0 0 1 3.86 14.48a2 2 0 0 0 .805-2.69 6 6 0 1 1 11.059-4.514 3.1 3.1 0 0 0 2.045 2.052 5.972 5.972 0 0 1 4.212 6.211 5.687 5.687 0 0 1-3.41 4.725 1 1 0 0 0 .858 1.806 7.638 7.638 0 0 0 4.547-6.376 7.96 7.96 0 0 0-5.62-8.277 1.089 1.089 0 0 1-.722-.734 8 8 0 0 0-15.489.841 7.78 7.78 0 0 0 .778 5.19 5.453 5.453 0 0 0-2.866 5.641 5.826 5.826 0 0 0 4.782 4.632 1 1 0 0 0 1.148-.826z"/></svg>
  