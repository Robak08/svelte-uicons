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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 14a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm3-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-4 4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm4 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2ZM15 5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm4 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-4 4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm4 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5-4v14c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9.258c0-1.351.558-2.664 1.531-3.601l1.888-1.818a2.99 2.99 0 0 1 4.162 0L9 5.206V5c0-2.757 2.243-5 5-5h5c2.757 0 5 2.243 5 5ZM9 9.258c0-.811-.335-1.598-.919-2.161L6.193 5.279a.993.993 0 0 0-1.386 0L2.919 7.097A3.014 3.014 0 0 0 2 9.258V19c0 1.654 1.346 3 3 3h4V9.258ZM22 5c0-1.654-1.346-3-3-3h-5c-1.654 0-3 1.346-3 3v17h8c1.654 0 3-1.346 3-3V5ZM6 13H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0-4H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0 8H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z"/></svg>
  