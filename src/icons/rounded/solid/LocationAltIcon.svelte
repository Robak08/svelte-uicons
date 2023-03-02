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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.071 17.213a10.141 10.141 0 0 0 0-14.259 9.94 9.94 0 0 0-14.142 0 10.14 10.14 0 0 0 .026 14.284l3.584 3.339a4.92 4.92 0 0 0 6.9.018zm-5.729-2.564a3.023 3.023 0 0 1-2.683 0l-2-1A2.986 2.986 0 0 1 7 10.965V8a2.986 2.986 0 0 1 1.658-2.685l2-1a3.014 3.014 0 0 1 2.683 0l2 1A2.986 2.986 0 0 1 17 8v2.966a2.986 2.986 0 0 1-1.658 2.684zm1.607-6.955A1 1 0 0 1 15 8v2.966a.994.994 0 0 1-.553.895l-2 1a1.006 1.006 0 0 1-.895 0l-2-1A.994.994 0 0 1 9 10.965V8a1 1 0 0 1 .051-.3l2.18 1.09a1.72 1.72 0 0 0 1.538 0zM20 23a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h14a1 1 0 0 1 1 1z"/></svg>
  