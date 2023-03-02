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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.746 6.285a1 1 0 0 1 1.414.015L18 8.181V1a1 1 0 0 1 2 0v7.181L21.84 6.3a1 1 0 0 1 1.43 1.4l-2.515 2.57a2.478 2.478 0 0 1-1.743.73.04.04 0 0 1-.019 0 2.456 2.456 0 0 1-1.74-.722L14.73 7.7a1 1 0 0 1 .016-1.415ZM12 15.422a3 3 0 0 0 2.122-.876l2.341-2.341a4.493 4.493 0 0 1-.625-.514L13.3 9.1a3 3 0 0 1 .046-4.242C13.82 4.394 14.792 3.543 15.42 3H5A4.986 4.986 0 0 0 .744 5.411l9.134 9.135a3 3 0 0 0 2.122.876Zm10.185-3.754a4.348 4.348 0 0 1-3.644 1.287l-3.005 3.005a5.008 5.008 0 0 1-7.072 0L.046 7.542C.032 7.7 0 7.843 0 8v11a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9.812Z"/></svg>
  