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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.293 15.36c-.39.39-.39 1.024 0 1.415l2.019 2.019a.999.999 0 1 1-1.414 1.414l-2.019-2.019a3.003 3.003 0 0 1 0-4.243l2.062-2.062a.999.999 0 1 1 1.414 1.414L8.293 15.36Zm6.766-3.477a.999.999 0 1 0-1.414 1.414l2.062 2.062c.39.39.39 1.024 0 1.415l-2.019 2.019a.999.999 0 1 0 1.414 1.414l2.019-2.019a3.003 3.003 0 0 0 0-4.243l-2.062-2.062ZM22 10.485V19c0 2.757-2.243 5-5 5H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h4.515c1.87 0 3.627.728 4.95 2.05l3.485 3.485a6.954 6.954 0 0 1 2.05 4.95Zm-6.95-7.021A5.031 5.031 0 0 0 14 2.659V7c0 .551.449 1 1 1h4.341a5.005 5.005 0 0 0-.805-1.05l-3.485-3.485ZM20 10.485c0-.163-.008-.325-.023-.485H15c-1.654 0-3-1.346-3-3V2.023A5.198 5.198 0 0 0 11.515 2H7C5.346 2 4 3.346 4 5v14c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-8.515Z"/></svg>
  