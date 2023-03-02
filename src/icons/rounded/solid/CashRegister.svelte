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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 10H7V6h2c1.654 0 3-1.346 3-3s-1.346-3-3-3H3C1.346 0 0 1.346 0 3s1.346 3 3 3h2v4c-2.757 0-5 2.243-5 5v3h24v-3c0-2.757-2.243-5-5-5ZM6 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM.101 20h23.798A5.01 5.01 0 0 1 19 24H5a5.009 5.009 0 0 1-4.899-4Z"/></svg>
  