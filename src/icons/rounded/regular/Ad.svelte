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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5Zm3 15c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v10ZM19 6a1 1 0 0 0-1 1v4.338a3.504 3.504 0 0 0-5 3.162c0 1.93 1.57 3.5 3.5 3.5.608 0 1.18-.156 1.679-.43A.998.998 0 0 0 20 17V7a1 1 0 0 0-1-1Zm-2.5 10c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5ZM8.958 6.713a1.001 1.001 0 0 0-1.916 0l-3 10a1 1 0 1 0 1.916.574L6.344 16h3.312l.386 1.287a1 1 0 1 0 1.917-.574l-3-10ZM6.944 14 8 10.48 9.056 14H6.944Z"/></svg>
  