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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.934 5.179A5.122 5.122 0 0 0 18.848 1H6.242C2.85 1 .482 2.6.066 5.179a4.989 4.989 0 0 0 1.543 4.475 1.119 1.119 0 0 1 .391.792V18a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-7.554a1.115 1.115 0 0 1 .388-.789 4.99 4.99 0 0 0 1.546-4.478ZM8 18a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm4 4a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  