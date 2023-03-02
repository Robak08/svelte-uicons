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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM7.293 12.707l2.583 2.584a.999.999 0 1 1-1.414 1.414l-2.583-2.584C5.312 13.555 5 12.801 5 12s.312-1.555.879-2.122l2.583-2.583a.999.999 0 1 1 1.414 1.414l-2.583 2.583c-.189.189-.293.44-.293.707s.104.518.293.707Zm10.828 1.415-2.583 2.584a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.583-2.584c.189-.189.293-.44.293-.707s-.104-.518-.293-.707L14.124 8.71a.999.999 0 1 1 1.414-1.414l2.583 2.583c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.121Z"/></svg>
  