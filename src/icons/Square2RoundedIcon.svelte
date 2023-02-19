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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-square-2 {customClass}"><path d="M19 24H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5v14c0 2.757-2.243 5-5 5ZM5 2C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3H5Zm11 15a1 1 0 0 0-1-1h-4.781c.426-.37 1.069-.72 1.742-1.086 1.753-.956 4.156-2.264 4.035-5.131C15.906 7.662 14.151 6 12.001 6c-2.206 0-4 1.794-4 4a1 1 0 0 0 2 0c0-1.103.897-2 2-2 1.058 0 1.953.838 1.997 1.868.063 1.512-1.088 2.252-2.994 3.29-.99.539-1.925 1.048-2.559 1.797a1.841 1.841 0 0 0-.272 1.983A1.818 1.818 0 0 0 9.839 18h5.162a1 1 0 0 0 1-1Z"/></svg>
  