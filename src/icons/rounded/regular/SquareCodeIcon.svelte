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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.831 17a.999.999 0 0 1-.707-1.707l2.583-2.583a.998.998 0 0 0 0-1.415l-2.583-2.584a.999.999 0 1 1 1.414-1.414l2.583 2.583c.566.566.879 1.32.879 2.121s-.312 1.555-.879 2.122l-2.583 2.583a.997.997 0 0 1-.707.293Zm-4.955-.298a.999.999 0 0 0 0-1.414l-2.583-2.583c-.189-.189-.293-.44-.293-.708s.104-.518.293-.707l2.583-2.583a.999.999 0 1 0-1.414-1.414L5.879 9.876c-.567.567-.879 1.32-.879 2.122s.312 1.555.879 2.122l2.583 2.583a.997.997 0 0 0 1.414 0ZM24 19V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5ZM19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14Z"/></svg>
  