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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.843 20.249A5 5 0 0 1 11 24H5a5.006 5.006 0 0 1-5-5V6a1 1 0 0 1 2 0v3h2a1 1 0 0 1 0 2H2v8a3 3 0 0 0 3 3h6a3 3 0 0 0 2.9-2.249 1 1 0 1 1 1.938.5ZM24 18a3 3 0 0 1-1.826 2.76l1.533 1.533a1 1 0 0 1-1.414 1.414l-22-22A1 1 0 0 1 1.707.293l.535.535A4.986 4.986 0 0 1 5 0h6a5.006 5.006 0 0 1 5 5v9.586L20.414 19H21a1 1 0 0 0 1-1V8a2 2 0 0 1-2-2V3.414l-1.707-1.707A1 1 0 0 1 19.707.293l1.99 1.99.02.02.525.525A5.956 5.956 0 0 1 24 6.945V18Zm-10-7h-1.586L14 12.586ZM3.707 2.293 10.414 9H14V5a3 3 0 0 0-3-3H5a3 3 0 0 0-1.293.293Z"/></svg>
  