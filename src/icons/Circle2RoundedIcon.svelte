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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-circle-2 {customClass}"><path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm4 15a1 1 0 0 0-1-1h-4.781c.426-.37 1.069-.72 1.742-1.086 1.754-.956 4.156-2.265 4.035-5.131C15.907 7.662 14.152 6 12.001 6c-2.206 0-4 1.794-4 4a1 1 0 1 0 2 0c0-1.103.897-2 2-2 1.058 0 1.954.838 1.997 1.867.064 1.513-1.088 2.253-2.994 3.29-.99.54-1.925 1.049-2.559 1.797a1.839 1.839 0 0 0-.272 1.983 1.818 1.818 0 0 0 1.666 1.062h5.162a1 1 0 0 0 1-1Z"/></svg>
  