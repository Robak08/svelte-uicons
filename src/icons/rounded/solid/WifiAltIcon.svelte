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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 23a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm4.535-2.122a1 1 0 0 0 0-1.414 5 5 0 0 0-7.07 0 1 1 0 0 0 1.414 1.414 3.074 3.074 0 0 1 4.242 0 1 1 0 0 0 1.414 0zm2.829-2.828a1 1 0 0 0 0-1.414 9.01 9.01 0 0 0-12.728 0 1 1 0 0 0 1.414 1.414 7.011 7.011 0 0 1 9.9 0 1 1 0 0 0 1.414 0zM9.222 19.464a3 3 0 0 1 0-4.243 11.014 11.014 0 0 1 14.757-.721 7.945 7.945 0 0 0-5.622-7.14 1.087 1.087 0 0 1-.722-.733 8 8 0 0 0-15.49.842 7.648 7.648 0 0 0 .8 5.179A5.448 5.448 0 0 0 .057 18.3 5.844 5.844 0 0 0 5.683 23h7.1a2598.303 2598.303 0 0 1-3.561-3.536z"/></svg>
  