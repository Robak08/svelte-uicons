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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 0h-3a1 1 0 0 0 0 2h2.586l-3.225 3.225A13.4 13.4 0 0 0 1.418 4.141a3.1 3.1 0 0 0-1.4 2.294A3.144 3.144 0 0 0 .925 9l6.329 6.33L4.586 18H1a1 1 0 0 0 0 2h1.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L4 21.414V23a1 1 0 0 0 2 0v-3.586l2.668-2.668L15 23.075a3.146 3.146 0 0 0 2.229.925 2.922 2.922 0 0 0 .336-.018 3.1 3.1 0 0 0 2.294-1.4 13.4 13.4 0 0 0-1.084-15.943L22 3.414V6a1 1 0 0 0 2 0V3a3 3 0 0 0-3-3ZM2.339 7.588a1.158 1.158 0 0 1-.333-.944 1.109 1.109 0 0 1 .5-.826 11.261 11.261 0 0 1 6.139-1.807 11.383 11.383 0 0 1 7.3 2.633l-7.277 7.274Zm15.843 13.9a1.109 1.109 0 0 1-.826.5 1.155 1.155 0 0 1-.944-.333l-6.33-6.329 7.275-7.274a11.386 11.386 0 0 1 .825 13.441Z"/></svg>
  